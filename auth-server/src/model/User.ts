// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as argon2 from 'argon2';
import { Model } from 'objection';

import connection from './connection';

Model.knex(connection);

export default class User extends Model {
	readonly id!: number
	email!: string
	email_verified: boolean | undefined
	password!: string
	salt!: string
	name!: string
	username!: string

	static get tableName () {
		return 'users';
	}

	static get idColumn () {
		return 'id';
	}

	getUser () {
		return {
			email: this.email,
			email_verified: this.email_verified,
			id: this.id,
			name: this.name,
			username: this.username
		};
	}

	verifyPassword (password: string) {
		return argon2.verify(this.password, password);
	}

	static get jsonSchema () {
		return {

			properties: {
				email: { maxLength: 255, type: 'string' },
				email_verified: { type: 'boolean' },
				id: { type: 'integer' },
				name: { maxLength: 512, type: 'string' },
				username: { maxLength: 255, minLength: 1, type: 'string' }
			},
			required: ['username'],
			type: 'object'
		};
	}
}

