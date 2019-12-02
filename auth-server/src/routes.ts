import { Router } from 'express'

import { upload, uploadController } from './controllers/upload'

const router = Router()

// unused
router.post('/auth/upload-profile-pic', upload.single('file'), uploadController)

export default router
