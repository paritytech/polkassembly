// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as argon2 from 'argon2';
import { Model } from 'objection';

import { JsonSchema } from '../types';
import connection from './connection';

Model.knex(connection);

export default class User extends Model {
	readonly id!: number
	email!: string
	email_verified: boolean | undefined
	password!: string
	salt!: string
	username!: string
	web3signup!: boolean | undefined

	static get tableName (): string {
		return 'users';
	}

	verifyPassword (password: string): Promise<boolean> {
		return argon2.verify(this.password, password);
	}

	static get jsonSchema (): JsonSchema {
		return {
			properties: {
				email: { maxLength: 255, type: 'string' },
				email_verified: { type: 'boolean' },
				id: { type: 'integer' },
				username: { maxLength: 255, minLength: 1, type: 'string' },
				web3signup: { type: 'boolean' }
			},
			required: ['username'],
			type: 'object'
		};
	}
}

