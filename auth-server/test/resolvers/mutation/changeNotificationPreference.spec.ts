// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { expect } from 'chai';
import { AuthenticationError } from 'apollo-server';
import 'mocha';

import Notification from '../../../src/model/Notification';
import changeNotificationPreference from '../../../src/resolvers/mutation/changeNotificationPreference';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';
import User from '../../../src/model/User';
import { getNewUserCtx } from '../../helpers';

describe('changeNotificationPreference mutation', () => {
	let signupUserId = -1;
	let fakectx: Context;
	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';

	before(async () => {
		const result = await getNewUserCtx(email, password, username);
		fakectx = result.ctx;
		signupUserId = result.userId;
	});

	after(async () => {
		await Notification
			.query()
			.where({ id: signupUserId })
			.del();

		await User
			.query()
			.where({ id: signupUserId })
			.del();
	});

	it('should have default Notification Preference after signup', async () => {
		const notification = await Notification
			.query()
			.where({ user_id: signupUserId })
			.first();

		expect(notification?.post_participated).to.be.true;
		expect(notification?.post_created).to.be.true;
		expect(notification?.new_proposal).to.be.false;
		expect(notification?.own_proposal).to.be.true;
	});

	it('should be able to change Notification Preference', async () => {
		await changeNotificationPreference(undefined, {
			notificationPreferences: {
				postParticipated: false,
				postCreated: false,
				newProposal: true,
				ownProposal: false
			}
		}, fakectx);

		const notification = await Notification
			.query()
			.where({ user_id: signupUserId })
			.first();

		expect(notification?.post_participated).to.be.false;
		expect(notification?.post_created).to.be.false;
		expect(notification?.new_proposal).to.be.true;
		expect(notification?.own_proposal).to.be.false;
	});

	it('should not be able to change Notification Preference with wrong jwt', async () => {
		fakectx.req.headers.authorization = 'Bearer wrong';
		try {
			await changeNotificationPreference(undefined, {
				notificationPreferences: {
					postParticipated: false,
					postCreated: false,
					newProposal: true,
					ownProposal: false
				}
			}, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.INVALID_JWT);
		}
	});
});
