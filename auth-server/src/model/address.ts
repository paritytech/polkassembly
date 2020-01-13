import { Model } from 'objection';
import connection from './connection';

Model.knex(connection);

export default class Address extends Model {
	readonly id!: number
	address: string
	user_id!: number
	name: string
	source: string
	message: string
	linked!: boolean

	static get tableName () {
		return 'address';
	}

	static get idColumn () {
		return 'id';
	}

	getToken () {
		return {
			address: this.address,
			user_id: this.user_id,
			name: this.name,
			source: this.source,
			message: this.message, // message which will be signed for proving address
			linked: this.linked
		};
	}

	static get jsonSchema () {
		return {
			type: 'object',
			required: ['user_id'],
			properties: {
				id: { type: 'integer' },
				address: { type: 'string' },
				user_id: { type: 'integer' },
				name: { type: 'string' },
				source: { type: 'string' },
				message: { type: 'string' },
				linked: { type: 'boolean' }
			}
		};
	}
}

