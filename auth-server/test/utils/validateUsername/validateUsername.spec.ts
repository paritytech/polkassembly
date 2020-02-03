import 'mocha';
import { expect } from 'chai';
import validateUsername from '../../../src/utils/validateUsername';

describe('validateUsername util', () => {
	it('should validate a correct username', () => {
		expect(validateUsername('correct.user_na-me')).to.be.true;
	});

	it('should invalidate an incorrect username containing whitespace', () => {
		expect(validateUsername('incorrect username')).to.be.false;
	});

	it('should invalidate an incorrect username containing invalid characters', () => {
		expect(validateUsername('incorrect@username')).to.be.false;
	});
});
