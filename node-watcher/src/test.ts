// Copyright 2018-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise, WsProvider } from '@polkadot/api';
import { BlockNumber, Hash } from '@polkadot/types/interfaces';
import { logger } from '@polkadot/util';

import { nomidotTasks } from './tasks';
import { Cached } from './tasks/types';
import getEnvVars from './util/getEnvVars';

const envVars = getEnvVars();
const ARCHIVE_NODE_ENDPOINT = envVars.ARCHIVE_NODE_ENDPOINT;

const l = logger('node-watcher');

const provider = new WsProvider(ARCHIVE_NODE_ENDPOINT);

ApiPromise.create({ provider })
  .then(async api => {
    api.once('error', e => {
      api.disconnect();
      l.error(`Api error: ${e}`);
    });

    api.once('disconnected', e => {
      api.disconnect();
      l.error(`Api disconnected: ${e}`);
    });

    let blockIndex = parseInt(process.argv[2]);

    if (!blockIndex) {
      l.error('Usage:\n yarn test <blocknumber>');
      return;
    }

    const blockNumber: BlockNumber = api.createType(
      'BlockNumber',
      blockIndex
    );
    l.warn(`block: ${blockNumber}`);

    const blockHash: Hash = await api.rpc.chain.getBlockHash(blockNumber);
    l.warn(`hash: ${blockHash}`);


    const [events, sessionIndex] = await Promise.all([
      await api.query.system.events.at(blockHash),
      await api.query.session.currentIndex.at(blockHash),
    ]);

    const cached: Cached = {
      events,
      sessionIndex,
    };

    // execute watcher tasks
    for await (const task of nomidotTasks) {
      l.warn(`Task --- ${task.name}`);

      const result = await task.read(blockHash, cached, api);

      try {
        l.warn(`Writing: ${JSON.stringify(result)}`);
        await task.write(blockNumber, result);
      } catch (e) {
        // Write task might throw errors such as unique constraints violated,
        // we ignore those.
        l.error(e);
      }
    }
  })
  .catch(e => {
    l.error(`Connection error: ${e}`);
  });
