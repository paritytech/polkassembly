// import BN from "bn.js";
import { Proposal, AccountId, BalanceOf } from "@polkadot/types/interfaces";
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Option, Vec, u32 } from "@polkadot/types";
import { ITuple } from "@polkadot/types/types";


  async function main () {
    const wsProvider = new WsProvider('wss://dev-node.substrate.dev');
    const api = await ApiPromise.create({provider: wsProvider});
  
    const unsub = await api.query.democracy.publicProps((publicProps: Vec<ITuple<[u32, Proposal]>>) => {
      publicProps.map(async ([idNumber, proposal]) => {
        console.log('idNumber',idNumber.toNumber(),'proposal', proposal);
        const unsub = await api.query.democracy.depositOf(idNumber.toNumber(),(depositOf: Option<ITuple<[BalanceOf, Vec<AccountId>]>>) => {
          const deposit = depositOf.unwrapOr(null);
          if (!deposit) return;
          // console.log('depositOf',deposit )
          console.log('Who depositOf[1]', deposit[1].toString())
          console.log('How much depositOf[0]',deposit[0].toString())
        });
      }) 
    });
  // [[0, {callIndex: 0x0300, args: {now: 0}}, 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY]]

  // 'query.democracy.depositOf'
  // 'derive.democracy.referendums'
  //   withCalls<Props>(
  //     'derive.chain.bestNumber',
  //     ['derive.democracy.referendumVotesFor', { paramName: 'idNumber' }],
  //     ['consts.democracy.enactmentPeriod', { fallbacks: ['query.democracy.publicDelay'] }]
  //   )
  // );

  }
  
  main().catch(console.error);