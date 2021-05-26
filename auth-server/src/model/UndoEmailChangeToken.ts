// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Model } from 'objection';

import { JsonSchema } from '../types';
import connection from './connection';

Model.knex(connection);

// token to undo email change
export default class UndoEmailChangeToken extends Model {
	readonly id!: number
	created_at!: string
	email!: string
	user_id!: number
	token!: string
	valid!: boolean

	static get tableName (): string {
		return 'undo_email_change_token';
	}

	static get jsonSchema (): JsonSchema {
		return {
			properties: {
				created_at: { type: 'string' },
				email: { type: 'string' },
				id: { type: 'integer' },
				token: { type: 'string' },
				user_id: { type: 'integer' },
				valid: { type: 'boolean' }
			},
			required: ['token', 'email', 'user_id'],
			type: 'object'
		};
	}
}

