import 'mocha'
import { expect } from 'chai'
import { uuid } from 'uuidv4'
import signup from '../../../src/resolvers/mutation/signup'
import verifyEmail from '../../../src/resolvers/mutation/verifyEmail'
import User from '../../../src/model/User'
import EmailVerificationToken from '../../../src/model/EmailVerificationToken'
import { Context } from '../../../src/types'

describe('verifyEmail mutation', () => {
	let signupResult
	let verifyToken
	let fakectx: Context = {
		req: {},
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

		verifyToken = await EmailVerificationToken
			.query()
			.allowInsert('[token, user_id, valid]')
			.insert({
				token: uuid(),
				user_id: signupResult.user.id,
				valid: true
			})
	})

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del()

		await EmailVerificationToken
			.query()
			.where({ id: verifyToken.id })
			.del()
	})

	it('should be able to verify email with valid token', async () => {
		await verifyEmail(null, { token: verifyToken.token })

		const dbUser = await User
			.query()
			.where({ id: signupResult.user.id })
			.first()

		expect(dbUser.email_verified).to.be.true
	})

	it('should throw an error if token is invalid', async () => {
		try {
			await verifyEmail(null, { token: 'fake' })
		} catch (error) {
			expect(error).to.exist
		}
	})
})
