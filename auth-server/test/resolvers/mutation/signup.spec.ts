import 'mocha'
import { expect } from 'chai'
import signup from '../../../src/resolvers/mutation/signup'
import User from '../../../src/model/User'
import { Context } from '../../../src/types'

describe('signup mutation', () => {
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
	const salt = 'testsalt'

	it('should be able to signup', async () => {
		const result = await signup(null, { email, password, username, name }, fakectx)
		expect(result.user.id).to.exist
		expect(result.user.id).to.a('number')
		expect(result.user.email).to.equal(email)
		expect(result.user.name).to.equal(name)
		expect(result.user.username).to.equal(username)
		expect(result.token).to.exist
		expect(result.token).to.be.a('string')

		await User
			.query()
			.where({ id: result.user.id })
			.del()
	})

	it('should throw an error if user with username/email already exist', async () => {
		const dbUser = await User
			.query()
			.allowInsert('[email, password, username, name]')
			.insert({
				email,
				password,
				salt,
				username,
				name
			})
			.returning('*')

		try {
			await signup(null, { email, password, username, name }, fakectx)
		} catch (error) {
			expect(error).to.exist
		}

		await User
			.query()
			.where({ id: dbUser.id })
			.del()
	})

})
