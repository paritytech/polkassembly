import User from '../../model/User';
import { PublicUser } from '../../types';

interface argsType {
	id: number
}
export default async (parent, { id }: argsType): Promise<PublicUser> => {
	const user = await User
		.query()
		.where('id', id)
		.first();

	if (!user) {
		return null;
	}

	return {
		id: user.id,
		username: user.username,
		name: user.name
	};
};