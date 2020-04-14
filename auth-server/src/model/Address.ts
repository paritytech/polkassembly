// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Model } from 'objection';

import { JsonSchema } from '../types';
import connection from './connection';

Model.knex(connection);

export default class Address extends Model {
	readonly id!: number
	network!: string
	address!: string
	public_key!: string
	user_id!: number
	sign_message!: string
	verified!: boolean

	static get tableName (): string {
		return 'address';
	}

	static get jsonSchema (): JsonSchema {
		return {
			properties: {
				address: { type: 'string' },
				id: { type: 'integer' },
				network: { type: 'network' },
				public_key: { type: 'string' },
				sign_message: { type: 'string' },
				user_id: { type: 'integer' },
				verified: { type: 'boolean' }
			},
			required: ['user_id'],
			type: 'object'
		};
	}
}

