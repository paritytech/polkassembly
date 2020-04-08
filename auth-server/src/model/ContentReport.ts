// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Model } from 'objection';

import { JsonSchema } from '../types';
import connection from './connection';

Model.knex(connection);

export default class ContentReport extends Model {
	readonly id!: number
	type!: string
	user_id!: number
	content_id!: string
	reason!: string
	comments!: string
	resolved!: boolean
	action!: string
	network!: string

	static get tableName (): string {
		return 'content_report';
	}

	static get idColumn (): string {
		return 'id';
	}

	static get jsonSchema (): JsonSchema {
		return {
			properties: {
				action: { type: 'string' },
				comments: { type: 'comments' },
				content_id: { type: 'string' },
				id: { type: 'integer' },
				network: { type: 'string' },
				reason: { type: 'string' },
				resolved: { type: 'boolean' },
				type: { type: 'string' },
				user_id: { type: 'integer' }
			},
			required: ['user_id'],
			type: 'object'
		};
	}
}

