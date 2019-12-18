import { AuthenticationError } from 'apollo-server'
import { expect } from 'chai'
import 'mocha'

import User from '../../../src/model/User'
import signup from '../../../src/resolvers/mutation/signup'
import changePassword from '../../../src/resolvers/mutation/changePassword'
import { Context } from '../../../src/types'
import messages from '../../../src/utils/messages'

describe('changePassword mutation', () => {
	let signupResult
	const fakectx: Context = {
		req: {
			headers: {}
		},
		res: {
			cookie: () => {}
		}
	} as any
	const email = 'test@email.com'
	const password = 'testpass'
	const username = 'testuser'
	const name = 'test name'

	before(async () => {
		signupResult = await signup(null, { email, password, username, name }, fakectx)
		fakectx.req.headers.authorization = `Bearer ${signupResult.token}` // eslint-disable-line
	})

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del()
	})

	it('should be able to change password', async () => {
		const newPassword = 'newpass'
		const oldDbUser = await User
			.query()
			.where({ id: signupResult.user.id })
			.first()

		await changePassword(null, { oldPassword: password, newPassword }, fakectx)


		const dbUser = await User
			.query()
			.where({ id: signupResult.user.id })
			.first()

		expect(dbUser.password).to.not.equal(oldDbUser.password)
	})

	it('should not be able to change password with an invalid jwt', async () => {
		const newPassword = 'newpass'
		fakectx.req.headers.authorization = 'Bearer wrong'
		try {
			await changePassword(null, { oldPassword: password, newPassword }, fakectx)
		} catch (error) {
			expect(error).to.exist
			expect(error).to.be.an.instanceof(AuthenticationError)
			expect(error.message).to.eq(messages.INVALID_JWT)
		}
	})
})
