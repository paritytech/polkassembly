import User from '../../model/User'

export default (_, args) => {
	return User
		.query()
		.where('id', args.id)
		.first()
}