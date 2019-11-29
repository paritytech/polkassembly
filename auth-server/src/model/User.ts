import * as Knex from 'knex'
import * as argon2 from 'argon2'
import { Model } from 'objection'
import { randomBytes } from 'crypto'
import * as connection from '../../knexfile'

const knexConnection = Knex(connection)

Model.knex(knexConnection)

export default class User extends Model {
	readonly id!: number
	username!: string
	email!: string
	password!: string
	salt!: string
	name!: string
	email_verified: boolean

	static get tableName () {
		return 'users'
	}

	static get idColumn () {
		return 'id'
	}

	getUser () {
		return {
			email: this.email,
			id: this.id,
			name: this.name,
			username: this.username
		}
	}

	async $beforeInsert () {
		const salt = randomBytes(32)
		this.password = await argon2.hash(this.password, { salt })
		this.salt = salt.toString('hex')
	}

	verifyPassword (password) {
		return argon2.verify(this.password, password)
	}

	static get jsonSchema () {
		return {
			type: 'object',
			required: ['username'],
			properties: {
				id: { type: 'integer' },
				username: { type: 'string', minLength: 1, maxLength: 255 },
				email: { type: 'string', minLength: 1, maxLength: 255 },
				name: { type: 'string', minLength: 1, maxLength: 512 },
				email_verified: { type: 'boolean' }
			}
		}
	}
}

