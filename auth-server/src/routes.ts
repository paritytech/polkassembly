import { Router } from 'express'

import { upload, uploadController } from './controllers/upload'
import {
	postLogout,
	getVerifyAccount
} from './controllers/user'

const auth = Router()

auth.post('/logout', postLogout)
auth.get('/verify-account', getVerifyAccount)
// unused
auth.post('/upload-profile-pic', upload.single('file'), uploadController)

const router = Router()

router.use('/auth', auth)

export default router
