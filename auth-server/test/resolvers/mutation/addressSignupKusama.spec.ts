// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import 'mocha';
import { expect } from 'chai';
import { ForbiddenError } from 'apollo-server';
import jwt from 'jsonwebtoken';

import User from '../../../src/model/User';
import Address from '../../../src/model/Address';
import addressLogin from '../../../src/resolvers/mutation/addressLogin';
import addressSignupStart from '../../../src/resolvers/mutation/addressSignupStart';
import addressSignupConfirm from '../../../src/resolvers/mutation/addressSignupConfirm';
import addressUnlink from '../../../src/resolvers/mutation/addressUnlink';
import setCredentialsConfirm from '../../../src/resolvers/mutation/setCredentialsConfirm';
import { Context, NetworkEnum } from '../../../src/types';
import messages from '../../../src/utils/messages';
import { redisSetex, redisGet, redisDel } from '../../../src/redis';
import { getSetCredentialsKey, getAddressSignupKey, ADDRESS_LOGIN_TTL, getAddressLoginKey } from '../../../src/services/auth';

describe('addressSignup mutation on Kusama', () => {
	const fakectx: Context = {
		req: {
			headers: {}
		},
		res: {
			cookie: () => {}
		}
	} as any;
	const network = NetworkEnum.KUSAMA;
	const address = 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F'; //Alice
	const signMessage = 'da194645-4daf-43b6-b023-6c6ce99ee709';
	const signature = '0x048ffa02dd58557ab7f7ffb316ac75fa942d2bdb83f4480a6698a1f39d6fa1184dd85d95480bfab59f516de578b102a2b01b81ca0e69134f90e0cd08ada7ca88';
	let loginResultUserId = 0;

	after(async () => {
		await User
			.query()
			.where({ id: loginResultUserId })
			.del();

		await Address
			.query()
			.where({ user_id: loginResultUserId })
			.del();
	});

	it('should be able to request signup challenge message', async () => {
		const result = await addressSignupStart(undefined, { address });
		const redisSignMessage = await redisGet(getAddressSignupKey(address));

		expect(result.signMessage).to.be.a('string');
		expect(result.signMessage).to.equal(redisSignMessage);
	});

	it('should be able to signup with correct signature', async () => {
		// mock the addressSignupStart
		await redisSetex(getAddressSignupKey(address), ADDRESS_LOGIN_TTL, signMessage);

		const result = await addressSignupConfirm(undefined, { address, network, signature }, fakectx);

		expect(result.token).to.be.a('string');

		const token: any = jwt.decode(result.token);

		expect(token['https://hasura.io/jwt/claims']['x-hasura-kusama-default']).to.equals(address);
		expect(token['https://hasura.io/jwt/claims']['x-hasura-user-id']).to.equals(token.sub);

		const dbuser = await User
			.query()
			.where({ id: Number(token.sub) })
			.first();

		const dbAddress = await Address
			.query()
			.where({ user_id: Number(token.sub) })
			.first();

		expect(dbuser).to.exist;
		expect(dbuser?.username).to.be.a('string');
		expect(dbuser?.web3signup).to.be.true;

		expect(dbAddress).to.exist;
		expect(dbAddress?.address).to.equal(address);
		expect(dbAddress?.verified).to.be.true;
		expect(dbAddress?.default).to.be.true;
	});

	it('should be able to login subsequently with address', async () => {
		// mock the addressLoginStart
		await redisSetex(getAddressLoginKey(address), ADDRESS_LOGIN_TTL, signMessage);

		const result = await addressLogin(undefined, { address, signature }, fakectx);

		fakectx.req.headers.authorization = `Bearer ${result.token}`;

		expect(result.token).to.be.a('string');

		const token: any = jwt.decode(result.token);

		loginResultUserId = Number(token.sub);
		expect(token['https://hasura.io/jwt/claims']['x-hasura-kusama-default']).to.equals(address);
		expect(token['https://hasura.io/jwt/claims']['x-hasura-user-id']).to.equals(token.sub);
	});

	it('should not be able to unlink the default address', async () => {
		try {
			await addressUnlink(undefined, { address }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.ADDRESS_UNLINK_NOT_ALLOWED);
		}
	});

	it('should be able to set credentials with valid signature', async () => {
		// mock the setCredentialsStart
		await redisSetex(getSetCredentialsKey(address), ADDRESS_LOGIN_TTL, signMessage);

		const email = 'test@example.com';
		const username = 'username';
		const password = 'password';

		const result = await setCredentialsConfirm(undefined, {address, email, password, signature, username});

		expect(result.token).to.be.a('string');

		const token: any = jwt.decode(result.token);
		expect(token.email).to.equals(email);
		expect(token.username).to.equals(username);
	});

	it('should not be able to signup with invalid signature', async () => {
		// mock the addressSignupStart
		await redisSetex(getAddressSignupKey(address), ADDRESS_LOGIN_TTL, signMessage);

		const fakeSignature = '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';

		try {
			await addressSignupConfirm(undefined, { address, network, signature: fakeSignature }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.ADDRESS_SIGNUP_INVALID_SIGNATURE);
		}

		await redisDel(getAddressSignupKey(address))
	});

	it('should not be able to signup with expired token', async () => {
		try {
			await addressSignupConfirm(undefined, { address, network, signature: signature }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.ADDRESS_SIGNUP_SIGN_MESSAGE_EXPIRED);
		}
	});
});
