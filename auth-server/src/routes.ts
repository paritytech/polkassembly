import { Router } from 'express';

import { postCreateHook, commentCreateHook } from './controllers/eventsHook';
import { upload, uploadController } from './controllers/upload';

const router = Router();

router.get('/healthcheck', (req, res) => {
	res.end('ok');
});

// unused
router.post('/auth/upload-profile-pic', upload.single('file'), uploadController);

router.post('/auth/event/post/create', postCreateHook);
router.post('/auth/event/comment/create', commentCreateHook);

export default router;
