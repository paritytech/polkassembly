import { Model } from 'objection';
import connection from './connection';

Model.knex(connection);

export default class Address extends Model {
	readonly id!: number
	address: string
	user_id!: number
	name: string
	source: string
	sign_message: string
	signature: string
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
			sign_message: this.sign_message, // message which will be signed for proving address
			signature: this.signature,
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
				sign_message: { type: 'string' },
				signature: { type: 'signature' },
				linked: { type: 'boolean' }
			}
		};
	}
}

