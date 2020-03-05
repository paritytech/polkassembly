import { Model } from 'objection';
import connection from './connection';

Model.knex(connection);

export default class ContentReport extends Model {
	readonly id!: number
	type: string
	user_id: number
	content_id: number
	reason: string
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
				content_id: { type: 'integer' },
				reason: { type: 'string' },
				resolved: { type: 'boolean' },
				action: { type: 'string' }
			}
		};
	}
}

