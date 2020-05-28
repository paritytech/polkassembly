import { EventRecord, ExtrinsicStatus, H256, SignedBlock } from '@polkadot/types/interfaces';
export default function filterEvents(extHash: H256, { block: { extrinsics, header } }: SignedBlock, allEvents: EventRecord[], status: ExtrinsicStatus): EventRecord[] | undefined;
