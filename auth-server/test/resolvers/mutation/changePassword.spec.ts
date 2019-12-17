import 'mocha'
import { expect } from 'chai'
import signup from '../../../src/resolvers/mutation/signup'
import changePassword from '../../../src/resolvers/mutation/changePassword'
import User from '../../../src/model/User'
import { Context } from '../../../src/types'

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

	it('should not be able to change password with fake token', async () => {
		const newPassword = 'newpass'
		fakectx.req.headers.authorization = 'Bearer fake'
		try {
			await changePassword(null, { oldPassword: password, newPassword }, fakectx)
		} catch (error) {
			expect(error).to.exist
		}
	})
})
