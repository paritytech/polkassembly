import { Response } from 'express'

/**
 * setRefrestTokenCookie
 * @param res http response
 * @param refreshToken refres token string
 */
export default (res: Response, refreshToken: string) => {
	res.cookie(
		'refresh_token',
		refreshToken,
		{
			httpOnly: true,
			maxAge: 6 * 30 * 24 * 60 * 60 * 1000, // 6 months
			sameSite: 'strict'
		}
	)
}
