// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as argon2 from 'argon2';
import { Model } from 'objection';
import connection from './connection';

Model.knex(connection);

export default class User extends Model {
	readonly id!: number
	username!: string
	email!: string
	password!: string
	salt!: string
	name!: string
	email_verified: boolean

	static get tableName () {
		return 'users';
	}

	static get idColumn () {
		return 'id';
	}

	getUser () {
		return {
			email: this.email,
			id: this.id,
			name: this.name,
			username: this.username,
			email_verified: this.email_verified
		};
	}

	verifyPassword (password) {
		return argon2.verify(this.password, password);
	}

	static get jsonSchema () {
		return {
			type: 'object',
			required: ['username'],
			properties: {
				id: { type: 'integer' },
				username: { type: 'string', minLength: 1, maxLength: 255 },
				email: { type: 'string', maxLength: 255 },
				name: { type: 'string', maxLength: 512 },
				email_verified: { type: 'boolean' }
			}
		};
	}
}

