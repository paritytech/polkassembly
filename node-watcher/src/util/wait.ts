// Copyright 2018-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import getEnvVars from './getEnvVars';

const envVars = getEnvVars();

const MAX_LAG = envVars.MAX_LAG;

export function waitFinalized(
  api: any,
  lastKnownBestFinalized: number
): Promise<{ unsub: () => void; bestFinalizedBlock: number }> {
  return new Promise(resolve => {
    async function wait(): Promise<void> {
      const unsub = await api.derive.chain.bestNumberFinalized((best: any) => {
        if (best.toNumber() > lastKnownBestFinalized) {
          resolve({ unsub, bestFinalizedBlock: best.toNumber() });
        }
      });
    }

    wait();
  });
}

export function reachedLimitLag(
  blockIndex: number,
  lastKnownBestBlock: number
): boolean {
  return MAX_LAG ? lastKnownBestBlock - blockIndex > MAX_LAG : false;
}

export function waitLagLimit(
  api: any,
  blockIndex: number
): Promise<{ unsub: () => void; bestBlock: number }> {
  return new Promise(resolve => {
    async function wait(): Promise<void> {
      const unsub = await api.derive.chain.bestNumber((bestBlock: any) => {
        if (reachedLimitLag(blockIndex, bestBlock.toNumber())) {
          resolve({ unsub, bestBlock: bestBlock.toNumber() });
        }
      });
    }

    wait();
  });
}
