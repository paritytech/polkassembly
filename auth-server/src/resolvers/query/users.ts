import User from '../../model/User'

export default () => {
	return User
		.query()
		.where('email_verified', true)
}