import { Router } from 'express'

import { upload, uploadController } from './controllers/upload'
import {
	postLogin,
	postLogout,
	postChangePassword,
	postChangeName, postChangeEmail,
	getVerifyAccount,
	postSignup,
	postToken
} from './controllers/user'

const auth = Router()

auth.post('/login', postLogin)
auth.post('/logout', postLogout)
auth.post('/change-password', postChangePassword)
auth.post('/change-name', postChangeName)
auth.post('/change-email', postChangeEmail)
auth.get('/verify-account', getVerifyAccount)
auth.post('/signup', postSignup)
auth.post('/token', postToken)
// unused
auth.post('/upload-profile-pic', upload.single('file'), uploadController)

const router = Router()

router.use('/auth', auth)

export default router
