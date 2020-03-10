// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Model } from 'objection';
import connection from './connection';

Model.knex(connection);

export default class RefreshToken extends Model {
	readonly id!: number
	token!: string
	user_id!: number
	valid!: boolean
	expires!: string

	static get tableName () {
		return 'refresh_tokens';
	}

	static get idColumn () {
		return 'id';
	}

	getToken () {
		return {
			token: this.token,
			user_id: this.user_id,
			valid: this.valid,
			expires: this.expires
		};
	}

	static get jsonSchema () {
		return {
			type: 'object',
			required: ['token', 'user_id'],
			properties: {
				id: { type: 'integer' },
				token: { type: 'string' },
				user_id: { type: 'integer' },
				valid: { type: 'boolean' },
				expires: { type: 'string' }
			}
		};
	}
}

