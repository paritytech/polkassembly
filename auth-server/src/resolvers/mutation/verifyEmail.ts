import AuthService from '../../services/auth';
import { MessageType } from '../../types';
import messages from '../../utils/messages';

interface argsType {
	token: string
}

export default async (parent, { token }: argsType): Promise<MessageType> => {
	const authServiceInstance = new AuthService();
	await authServiceInstance.VerifyEmail(token);

	return { message: messages.EMAIL_VERIFICATION_SUCCESSFUL };
};
