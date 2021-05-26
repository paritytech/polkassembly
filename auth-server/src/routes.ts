// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from 'express';

import { commentCreateHook, onchainLinksCreateHook } from './controllers/eventsHook';

const router = Router();

router.get('/healthcheck', (req, res) => {
	res.end('ok');
});

router.post('/auth/event/comment/create', commentCreateHook);
router.post('/auth/event/onchain_link/create', onchainLinksCreateHook);

export default router;
