import * as sgMail from '@sendgrid/mail'

import User from '../model/User'
import EmailVerificationToken from '../model/EmailVerificationToken'
import PasswordResetToken from '../model/PasswordResetToken'

const apiKey = process.env.SENDGRID_API_KEY
const FROM = 'noreply@polkassembly.io'
const DOMAIN = 'http://polkassembly.io'

if (apiKey) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export const sendVerificationEmail = (user: User, token: EmailVerificationToken) => {
	if (!apiKey) {
		console.warn('Verification Email not sent due to missing API key')
		return
	}

	const verifyUrl = `${DOMAIN}/verify-email/${token.token}`
	const text = `
		<p>
			Welcome aboard ${user.name || ''}!<br/><br/>

			For security purposes, please confirm your email address here - <a target="_blank" href=${verifyUrl}>verify your account</a><br/><br/>

			See you soon,<br/><br/>
			Polkassembly Team
		</p>
	`

	const msg = {
		to: user.email,
		from: FROM,
		subject: 'Verify your email address',
		text,
		html: text
	}

	console.log(`Sending verification email to ${user.email}`)

	sgMail.send(msg);
}

export const sendResetPasswordEmail = (user: User, token: PasswordResetToken) => {
	if (!apiKey) {
		console.warn('Password reset Email not sent due to missing API key')
		return
	}

	const resetUrl = `${DOMAIN}/auth/reset-password?token=${token.token}`
	const text = `
		<p>
			Hi ${user.name || ''}!<br/><br/>

			It looks like you need to reset your password.<br />
			Your secret is safe with us, and this will be a breeze.<br /><br />

			Go ahead and follow the link to reset your password:<br /><br />
			<a href="${resetUrl}">Reset Your Password</a><br /><br />

			Just a heads up, to make sure your information is safe and secure, the link will expire after 24 hours.<br /><br />

			If you didn't request a password change, then just ignore this message.<br /><br />

			Polkassembly Team
		</p>
	`

	const msg = {
		to: user.email,
		from: FROM,
		subject: 'Reset Your Password',
		text,
		html: text
	}

	console.log(`Sending password reset email to ${user.email}`)

	sgMail.send(msg);
}
