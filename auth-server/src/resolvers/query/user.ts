import User from '../../model/User'

interface argsType {
	id: number
}
export default ({ id }: argsType) => {
	return User
		.query()
		.where('id', id)
		.first()
}