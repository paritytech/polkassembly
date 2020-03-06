import { UserInputError } from 'apollo-server';
import 'mocha';
import { expect } from 'chai';

import messages from '../../../src/utils/messages';
import validateUsername from '../../../src/utils/validateUsername';

describe('validateUsername util', () => {
	it('should validate a correct name', function(done){
		validateUsername('C0rR3ctUserna_-m3');
		done();
	});

	it('should invalidate a username containing whitespace', () => {
		try{
			validateUsername('incorrect username');
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.USERNAME_INVALID_ERROR);
		}
	});

	it('should invalidate a username containing invalid characters', () => {
		try{
			validateUsername('incorrect@username');
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.USERNAME_INVALID_ERROR);
		}
	});

	it('should invalidate a username longer than 30 characters', () => {
		try{
			validateUsername('thisusernameislongerthanthirtycharacters');
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.USERNAME_INVALID_ERROR);
		}
	});

	it('should invalidate a username shorter than 3 characters', () => {
		try{
			validateUsername('a');
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.USERNAME_INVALID_ERROR);
		}
	});
});
