// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { email, fullname, password, username } from '../validation';

test('Email validation', () => {
	const email1 = 'polk@dot.com';
	const email2 = 'polk@@dot.com';
	const email3 = 'polk@dot..com';

	expect(email.pattern.test(email1)).toBe(true);
	expect(email.pattern.test(email2)).toBe(false);
	expect(email.pattern.test(email3)).toBe(false);
});

test('Fullname validation', () => {
	const fullname1 = 'Tim';
	const fullname2 = 'Tim   Cook';
	const fullname3 = 'X Æ A-12';

	expect(fullname1.length).toBeGreaterThanOrEqual(fullname.minLength);
	expect(fullname2.length).toBeGreaterThanOrEqual(fullname.minLength);
	expect(fullname3.length).toBeLessThanOrEqual(fullname.maxLength);
});

test('Password validation', () => {
	const password1 = '123456';
	const password2 = 'trailingSpace ';

	expect(password1.length).toBeGreaterThanOrEqual(password.minLength);
	expect(password2.length).toBeGreaterThanOrEqual(password.minLength);
});

test('Username validation', () => {
	const username1 = 'Tim';
	const username2 = 'Tim Cook';
	const username3 = 'X Æ A-12';

	expect(username.pattern.test(username1)).toBe(true);
	expect(username.pattern.test(username2)).toBe(false);
	expect(username.pattern.test(username3)).toBe(false);
});