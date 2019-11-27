import * as sgMail from '@sendgrid/mail'
import * as EmailValidator from 'email-validator'

import User from '../model/User'
import VerifyToken from '../model/VerifyToken'

const apiKey = process.env.SENDGRID_API_KEY
const FROM = 'noreply@polkassembly.io'
const DOMAIN = 'http://polkassembly.io'

if (apiKey) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export const sendVerificationEmail = (user: User, token: VerifyToken) => {
    if (!apiKey) {
        console.warn('Verification Email not sent due to missing API key')
        return
    }

    if (!EmailValidator.validate(user.email)) {
        console.warn('Verification Email not sent due to invalid email')
        return
    }

    const verifyUrl = `${DOMAIN}/verify-account?token=${token.token}`
    const text = `
        <p>
            Welcome aboard ${user.name}!<br/><br/>

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
        html: text,
    }

    console.log(`Sending verification email to ${user.email}`)

    sgMail.send(msg);
}
