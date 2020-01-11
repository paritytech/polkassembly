import AuthService from '../../services/auth';
import { ChangeResponseType } from '../../types';
import messages from '../../utils/messages';

interface argsType {
	token: string
}

export default async (parent, { token }: argsType): Promise<ChangeResponseType> => {
	const authServiceInstance = new AuthService();
	const updatedJWT = await authServiceInstance.UndoEmail(token);

	return { message: messages.EMAIL_UNDO_SUCCESSFUL, token: updatedJWT };
};
