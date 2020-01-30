import { Model } from 'objection';
import connection from './connection';

Model.knex(connection);

export default class Address extends Model {
	readonly id!: number
	network: string
	address: string
	public_key: string
	user_id!: number
	sign_message: string
	verified!: boolean

	static get tableName () {
		return 'address';
	}

	static get idColumn () {
		return 'id';
	}

	getToken () {
		return {
			network: this.network,
			address: this.address,
			user_id: this.user_id,
			public_key: this.public_key,
			sign_message: this.sign_message, // message which will be signed for proving address
			verified: this.verified
		};
	}

	static get jsonSchema () {
		return {
			type: 'object',
			required: ['user_id'],
			properties: {
				id: { type: 'integer' },
				network: { type: 'network' },
				address: { type: 'string' },
				public_key: { type: 'string' },
				user_id: { type: 'integer' },
				sign_message: { type: 'string' },
				verified: { type: 'boolean' }
			}
		};
	}
}

