import { Model } from 'objection';
import connection from './connection';

Model.knex(connection);

export default class EmailVerificationToken extends Model {
	readonly id!: number
	token!: string
	user_id!: number
	valid: boolean

	static get tableName () {
		return 'email_verification_token';
	}

	static get idColumn () {
		return 'id';
	}

	getToken () {
		return {
			token: this.token,
			user_id: this.user_id,
			valid: this.valid
		};
	}

	static get jsonSchema () {
		return {
			type: 'object',
			required: ['token', 'user_id'],
			properties: {
				id: { type: 'integer' },
				token: { type: 'string' },
				user_id: { type: 'integer' },
				valid: { type: 'boolean' }
			}
		};
	}
}

