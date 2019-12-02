import AuthService from '../../services/auth'
import { Context } from '../../types'

export default async (_, args, ctx: Context) => {
    const { token } = args
    const authServiceInstance = new AuthService()
    await authServiceInstance.VerifyEmail(token)

    return { message: 'Thank you for verifying your account' }
}