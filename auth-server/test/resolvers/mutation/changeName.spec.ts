import 'mocha'
import { expect } from 'chai'
import signup from '../../../src/resolvers/mutation/signup'
import changeName from '../../../src/resolvers/mutation/changeName'
import User from '../../../src/model/User'
import { Context } from '../../../src/types'

describe('changeName mutation', () => {
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

	it('should be able to change name', async () => {
		const newName = 'new name'
		await changeName(null, { newName }, fakectx)


		const dbUser = await User
			.query()
			.where({ id: signupResult.user.id })
			.first()

		expect(dbUser.name).to.be.equal(newName)
	})

	it('should not be able to change name with fake token', async () => {
		const newName = 'new name'
		fakectx.req.headers.authorization = 'Bearer fake'
		try {
			await changeName(null, { newName }, fakectx)
		} catch (error) {
			expect(error).to.exist
		}
	})
})
