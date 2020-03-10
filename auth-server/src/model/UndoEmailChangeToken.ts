// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Model } from 'objection';
import connection from './connection';

Model.knex(connection);

// token to undo email change
export default class UndoEmailChangeToken extends Model {
	readonly id!: number
	token!: string
	email!: string
	user_id!: number
	valid: boolean
	created_at: string

	static get tableName () {
		return 'undo_email_change_token';
	}

	static get idColumn () {
		return 'id';
	}

	getToken () {
		return {
			token: this.token,
			email: this.email,
			user_id: this.user_id,
			valid: this.valid,
			created_at: this.created_at
		};
	}

	static get jsonSchema () {
		return {
			type: 'object',
			required: ['token', 'email', 'user_id'],
			properties: {
				id: { type: 'integer' },
				token: { type: 'string' },
				email: { type: 'string' },
				user_id: { type: 'integer' },
				valid: { type: 'boolean' },
				created_at: { type: 'string' }
			}
		};
	}
}

