import { Router } from 'express'

import { upload, uploadController } from './controllers/upload'
import { getVerifyEmail } from './controllers/user'

const auth = Router()

auth.get('/verify-email', getVerifyEmail)
// unused
auth.post('/upload-profile-pic', upload.single('file'), uploadController)

const router = Router()

router.use('/auth', auth)

export default router
