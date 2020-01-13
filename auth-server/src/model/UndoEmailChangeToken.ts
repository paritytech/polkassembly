import { Model } from 'objection';
import connection from './connection';

Model.knex(connection);

// token to undo email change
export default class UndoEmailChangeToken extends Model {
	readonly id!: number
	token!: string
	email!: string
	user_id!: number
	valid: boolean

	static get tableName () {
		return 'undo_email_change_token';
	}

	static get idColumn () {
		return 'id';
	}

	getToken () {
		return {
			token: this.token,
			email: this.email,
			user_id: this.user_id,
			valid: this.valid
		};
	}

	static get jsonSchema () {
		return {
			type: 'object',
			required: ['token', 'email', 'user_id'],
			properties: {
				id: { type: 'integer' },
				token: { type: 'string' },
				email: { type: 'string' },
				user_id: { type: 'integer' },
				valid: { type: 'boolean' }
			}
		};
	}
}

