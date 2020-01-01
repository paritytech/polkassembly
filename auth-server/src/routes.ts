import { Router } from 'express'

import { upload, uploadController } from './controllers/upload'
import subscriptionHook from './controllers/subscriptionHook'

const router = Router()

// unused
router.post('/auth/upload-profile-pic', upload.single('file'), uploadController)

router.post('/auth/post/subscription', subscriptionHook)

export default router
