import User from '../../model/User';
import { PublicUser } from '../../types';

export default async (): Promise<PublicUser[]> => {
	const users = await User.query();

	return Array.isArray(users) ? users.map(user => ({
		id: user.id,
		username: user.username,
		name: user.name
	})) : [];
};