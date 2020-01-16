import AuthService from '../../services/auth';
import { UndoEmailChangeResponseType } from '../../types';
import messages from '../../utils/messages';

interface argsType {
	token: string
}

export default async (parent, { token }: argsType): Promise<UndoEmailChangeResponseType> => {
	const authServiceInstance = new AuthService();
	const { updatedToken, email } = await authServiceInstance.UndoEmailChange(token);

	return { message: messages.EMAIL_UNDO_SUCCESSFUL, token: updatedToken, email };
};
