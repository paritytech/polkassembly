import { Router } from 'express';

import subscriptionHook from './controllers/subscriptionHook';
import { upload, uploadController } from './controllers/upload';

const router = Router();

// unused
router.post('/auth/upload-profile-pic', upload.single('file'), uploadController);

router.post('/auth/post/subscription', subscriptionHook);

export default router;
