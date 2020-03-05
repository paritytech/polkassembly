import { UserInputError } from 'apollo-server';
import 'mocha';
import { expect } from 'chai';

import messages from '../../../src/utils/messages';
import validateName from '../../../src/utils/validateName';

describe('validateName util', () => {

	it('should validate a correct name', function(done){
		validateName('C0rR3ct na_-m3');
		done();
	});

	it('should invalidate a name containing invalid characters', () => {
		try{
			validateName('incorrect@name')
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.NAME_INVALID_ERROR);
		}
	});

	it('should invalidate a name longer than 30 characters', () => {
		try{
			validateName('thisnameislongerthanthirtycharacters')
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.NAME_INVALID_ERROR);
		}
	});

	it('should invalidate a name shorter than 3 characters', () => {
		try{
			validateName('a')
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.NAME_INVALID_ERROR);
		}
	});
});
