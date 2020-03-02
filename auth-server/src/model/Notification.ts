import { Model } from 'objection';
import connection from './connection';

Model.knex(connection);

export default class Notification extends Model {
	readonly id!: number
	user_id!: number
	post_participated: boolean
	post_created: boolean
	new_proposal: boolean
	own_proposal: boolean

	static get tableName () {
		return 'notification';
	}

	static get idColumn () {
		return 'id';
	}

	getToken () {
		return {
			user_id: this.user_id,
			post_participated: this.post_participated,
			post_created: this.post_created,
			new_proposal: this.new_proposal,
			own_proposal: this.own_proposal
		};
	}

	static get jsonSchema () {
		return {
			type: 'object',
			required: ['user_id'],
			properties: {
				id: { type: 'integer' },
				user_id: { type: 'integer' },
				post_participated: { type: 'boolean' },
				post_created: { type: 'boolean' },
				new_proposal: { type: 'boolean' },
				own_proposal: { type: 'boolean' }
			}
		};
	}
}

