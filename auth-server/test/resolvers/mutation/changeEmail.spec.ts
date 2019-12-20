import { AuthenticationError, UserInputError } from 'apollo-server'
import { expect } from 'chai'
import 'mocha'

import EmailVerificationToken from '../../../src/model/EmailVerificationToken'
import User from '../../../src/model/User'
import signup from '../../../src/resolvers/mutation/signup'
import changeEmail from '../../../src/resolvers/mutation/changeEmail'
import { Context } from '../../../src/types'
import messages from '../../../src/utils/messages'

describe('changeEmail mutation', () => {
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

	it('should allow to change an email', async () => {
		const email = 'blabla@blou.de'

		await changeEmail(null, { email }, fakectx)

		const verifyToken = await EmailVerificationToken
			.query()
			.where({ user_id: signupResult.user.id })
		console.log(verifyToken)

		expect(verifyToken).not.be.undefined
		// expect(dbUser.password).to.not.equal(oldDbUser.password)
	})

	// it('should not be able to change password with an invalid jwt', async () => {
	// 	const newPassword = 'newpass'
	// 	fakectx.req.headers.authorization = 'Bearer wrong'
	// 	try {
	// 		await changePassword(null, { oldPassword: password, newPassword }, fakectx)
	// 	} catch (error) {
	// 		expect(error).to.exist
	// 		expect(error).to.be.an.instanceof(AuthenticationError)
	// 		expect(error.message).to.eq(messages.INVALID_JWT)
	// 	}
	// })

	// it('should not be able to change for a short password', async () => {
	// 	const newPassword = 'newpa'
	// 	try {
	// 		await changePassword(null, { oldPassword: password, newPassword }, fakectx)
	// 	} catch (error) {
	// 		expect(error).to.exist
	// 		expect(error).to.be.an.instanceof(UserInputError)
	// 		expect(error.message).to.eq(messages.PASSWORD_LENGTH_ERROR)
	// 	}
	// })
})
