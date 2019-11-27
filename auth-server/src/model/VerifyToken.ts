import * as Knex from 'knex'
import { Model } from 'objection'
import * as connection from '../../knexfile'

const knexConnection = Knex(connection)

Model.knex(knexConnection)

export default class VerifyToken extends Model {
	readonly id!: number
	token!: string
	user_id!: number
	valid: boolean

	static get tableName () {
		return 'verify_tokens'
	}

	static get idColumn () {
		return 'id'
	}

	getToken () {
		return {
			token: this.token,
			user_id: this.user_id,
			valid: this.valid
		}
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
		}
	}
}

