import 'mocha'
import { expect } from 'chai'
import signup from '../../../src/resolvers/mutation/signup'
import login from '../../../src/resolvers/mutation/login'
import User from '../../../src/model/User'
import { Context } from '../../../src/types'
import { AuthenticationError } from 'apollo-server'
import messages from '../../../src/utils/messages'

describe('login mutation', () => {
	let signupResult
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
		signupResult = await signup({ email, password, username, name }, fakectx)
	})

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del()
	})

	it('should be able to login', async () => {
		const result = await login({ username, password }, fakectx)

		expect(result.user.id).to.exist
		expect(result.user.id).to.a('number')
		expect(result.user.email).to.equal(email)
		expect(result.user.name).to.equal(name)
		expect(result.user.username).to.equal(username)
		expect(result.token).to.exist
		expect(result.token).to.be.a('string')
	})

	it('should throw an error if username doesn\'t exist', async () => {
		try {
			await login({ username: 'notexist', password }, fakectx)
		} catch (error) {
			expect(error).to.exist
			expect(error).to.be.an.instanceof(AuthenticationError)
			expect(error.message).to.eq(messages.NO_USER_FOUND_WITH_USERNAME)
		}
	})

	it('should throw an error if password is wrong', async () => {
		try {
			await login({ username, password: 'wrong' }, fakectx)
		} catch (error) {
			expect(error).to.exist
			expect(error).to.be.an.instanceof(AuthenticationError)
			expect(error.message).to.eq(messages.INCORRECT_PASSWORD)
		}
	})

})
