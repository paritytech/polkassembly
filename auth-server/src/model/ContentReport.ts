// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Model } from 'objection';
import connection from './connection';

Model.knex(connection);

export default class ContentReport extends Model {
	readonly id!: number
	type: string
	user_id: number
	content_id: string
	reason: string
	comments: string
	resolved: boolean
	action: string

	static get tableName () {
		return 'content_report';
	}

	static get idColumn () {
		return 'id';
	}

	getToken () {
		return {
			type: this.type,
			user_id: this.user_id,
			content_id: this.content_id,
			reason: this.reason,
			comments: this.comments,
			resolved: this.resolved,
			action: this.action
		};
	}

	static get jsonSchema () {
		return {
			type: 'object',
			required: ['user_id'],
			properties: {
				id: { type: 'integer' },
				type: { type: 'string' },
				user_id: { type: 'integer' },
				content_id: { type: 'string' },
				reason: { type: 'string' },
				comments: { type: 'comments' },
				resolved: { type: 'boolean' },
				action: { type: 'string' }
			}
		};
	}
}

