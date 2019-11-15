import dotenv from 'dotenv';
import { Proposal, AccountId, BalanceOf } from "@polkadot/types/interfaces";
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Option, Vec, u32, GenericCall } from "@polkadot/types";
import { ITuple } from "@polkadot/types/types";

import {PostAndProposalTypeInfo } from './types'
import { addPostAndProposal, proposalAlreadyExist } from './graphql_helpers';

dotenv.config();

const main = async () => {
  // const wsProvider = new WsProvider('wss://dev-node.substrate.dev');
  const wsProvider = new WsProvider(process.env.NODE_WS_PROVIDER);
  const api = await ApiPromise.create({provider: wsProvider});

  // Initial scrapping of all proposals. Casting is needed for now
  const publicProps = await api.query.democracy.publicProps<Vec<ITuple<[u32, Proposal]>>>();
   // e.g returns
  // [[0, {callIndex: 0x0300, args: {now: 0}}, 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY]]

  publicProps.map(async ([idNumber, proposal]) => {
    const proposalId = idNumber.toNumber();
    
    getPostAndProposalInfo(api, proposalId, proposal);

    proposalAlreadyExist(proposalId)
    .then(async (alreadyExist) => {
      if (!alreadyExist) {
        const values = await getPostAndProposalInfo(api, proposalId, proposal)
        if (values) {
          addPostAndProposal({... values, onchainId:idNumber.toNumber()});
          console.log(`✅ Proposal ${idNumber.toString()} added to the database.`)
        } else {
          throw new Error(`Failed at getting post and proposal info for proposal #${idNumber.toString()}.`)
        }
      } else {
        throw new Error(`🔴 proposal id ${idNumber.toString()} already exists in the database. Not inserted.`)
      }
    })
    .catch(e => {throw new Error(e)});

  });

}

const getPostAndProposalInfo = async (api: ApiPromise, idNumber:number, proposal:Proposal): Promise<PostAndProposalTypeInfo | null> => {
  const depositOf = await api.query.democracy.depositOf<Option<ITuple<[BalanceOf, Vec<AccountId>]>>>(idNumber);

  const depositInfo = depositOf.unwrapOr(null);
  if (!depositInfo) return null;
  // e.g returns
  // [
  //   [0,{"callIndex":"0x0001","args":{"_remark":"0x01"}},"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"],
  //   [1,{"callIndex":"0x0602","args":{"source":"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","dest":"5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty","value":123000000000000}},"5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty"]
  // ]
  const authorAddress = depositInfo[1][0].toString();
  const depositAmount = depositInfo[0];
  const { meta, method, section } = GenericCall.findFunction(proposal.callIndex);
  const methodName = `${section}.${method}`;
  // console.log('-----------------------------')
  // console.log('authorAddress',authorAddress)
  // console.log('amountDeposit',depositAmount)
  // console.log('methodName',methodName)

  // const documentation = (meta && meta.documentation) ? meta.documentation.join(' ') : null;

  const params = GenericCall.filterOrigin(proposal.meta).map(({ name }): { name: string } => ({
    name: name.toString(),
  }));

  const methodArguments = proposal && proposal.args && params && params.reduce((agg, arg, index) => {
    return {
      ...agg,
      //FIXME prob not super clever to "toString()" the arg here. Addresses or array of addresses should remain as such.
      [arg.name]: proposal.args[index].toString()
    }
  },{})

  return {
    authorId: 56, //FIXME need to have an actual author id based on the address
    depositAmount,
    methodArguments: JSON.stringify(methodArguments),
    methodName
  };

};


main().catch(console.error);
// proposalAlreadyExist(0).then(proposal => console.log('proposal',proposal))