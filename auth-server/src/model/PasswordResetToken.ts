// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Model } from 'objection';

import connection from './connection';

Model.knex(connection);

export default class PasswordResetToken extends Model {
	expires: string
	readonly id!: number
	token!: string
	user_id!: number
	valid: boolean

	static get tableName () {
		return 'password_reset_token';
	}

	static get idColumn () {
		return 'id';
	}

	getToken () {
		return {
			expires: this.expires,
			token: this.token,
			user_id: this.user_id,
			valid: this.valid
		};
	}

	static get jsonSchema () {
		return {
			properties: {
				expires: { type: 'string' },
				id: { type: 'integer' },
				token: { type: 'string' },
				user_id: { type: 'integer' },
				valid: { type: 'boolean' }
			},
			required: ['token', 'user_id'],
			type: 'object'
		};
	}
}

