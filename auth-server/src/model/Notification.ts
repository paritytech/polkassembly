// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Model } from 'objection';

import connection from './connection';

Model.knex(connection);

export default class Notification extends Model {
	readonly id!: number
	new_proposal: boolean
	own_proposal: boolean
	post_created: boolean
	post_participated: boolean
	user_id!: number

	static get tableName () {
		return 'notification';
	}

	static get idColumn () {
		return 'id';
	}

	getToken () {
		return {
			new_proposal: this.new_proposal,
			own_proposal: this.own_proposal,
			post_created: this.post_created,
			post_participated: this.post_participated,
			user_id: this.user_id
		};
	}

	static get jsonSchema () {
		return {
			properties: {
				id: { type: 'integer' },
				new_proposal: { type: 'boolean' },
				own_proposal: { type: 'boolean' },
				post_created: { type: 'boolean' },
				post_participated: { type: 'boolean' },
				user_id: { type: 'integer' }
			},
			required: ['user_id'],
			type: 'object'
		};
	}
}

