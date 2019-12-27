import 'mocha'
import { expect } from 'chai'
import validateEmail from '../../../src/utils/validateEmail'

describe('validateEmail util', () => {
	it('should validate a correct email', () => {
		expect(validateEmail('test@example.com')).to.be.true
	})

	it('should invalidate an incorrect email', () => {
		expect(validateEmail('incorrectemail')).to.be.false
	})

	it('should invalidate an email with no top level domain', () => {
		expect(validateEmail('test@root')).to.be.false
	})
})