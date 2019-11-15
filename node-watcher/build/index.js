"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = require("@polkadot/api");
const types_1 = require("@polkadot/types");
const graphql_helpers_1 = require("./graphql_helpers");
dotenv_1.default.config();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    // const wsProvider = new WsProvider('wss://dev-node.substrate.dev');
    const wsProvider = new api_1.WsProvider(process.env.NODE_WS_PROVIDER);
    const api = yield api_1.ApiPromise.create({ provider: wsProvider });
    // Initial scrapping of all proposals. Casting is needed for now
    const publicProps = yield api.query.democracy.publicProps();
    // e.g returns
    // [[0, {callIndex: 0x0300, args: {now: 0}}, 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY]]
    publicProps.map(([idNumber, proposal]) => __awaiter(void 0, void 0, void 0, function* () {
        const proposalId = idNumber.toNumber();
        getPostAndProposalInfo(api, proposalId, proposal);
        graphql_helpers_1.proposalAlreadyExist(proposalId)
            .then((alreadyExist) => __awaiter(void 0, void 0, void 0, function* () {
            if (!alreadyExist) {
                const values = yield getPostAndProposalInfo(api, proposalId, proposal);
                if (values) {
                    graphql_helpers_1.addPostAndProposal(Object.assign(Object.assign({}, values), { onchainId: idNumber.toNumber() }));
                    console.log(`✅ Proposal ${idNumber.toString()} added to the database.`);
                }
                else {
                    throw new Error(`Failed at getting post and proposal info for proposal #${idNumber.toString()}.`);
                }
            }
            else {
                throw new Error(`🔴 proposal id ${idNumber.toString()} already exists in the database. Not inserted.`);
            }
        }))
            .catch(e => { throw new Error(e); });
    }));
});
const getPostAndProposalInfo = (api, idNumber, proposal) => __awaiter(void 0, void 0, void 0, function* () {
    const depositOf = yield api.query.democracy.depositOf(idNumber);
    const depositInfo = depositOf.unwrapOr(null);
    if (!depositInfo)
        return null;
    // e.g returns
    // [
    //   [0,{"callIndex":"0x0001","args":{"_remark":"0x01"}},"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"],
    //   [1,{"callIndex":"0x0602","args":{"source":"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","dest":"5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty","value":123000000000000}},"5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty"]
    // ]
    const authorAddress = depositInfo[1][0].toString();
    const depositAmount = depositInfo[0];
    const { meta, method, section } = types_1.GenericCall.findFunction(proposal.callIndex);
    const methodName = `${section}.${method}`;
    // console.log('-----------------------------')
    // console.log('authorAddress',authorAddress)
    // console.log('amountDeposit',depositAmount)
    // console.log('methodName',methodName)
    // const documentation = (meta && meta.documentation) ? meta.documentation.join(' ') : null;
    const params = types_1.GenericCall.filterOrigin(proposal.meta).map(({ name }) => ({
        name: name.toString(),
    }));
    const methodArguments = proposal && proposal.args && params && params.reduce((agg, arg, index) => {
        return Object.assign(Object.assign({}, agg), { 
            //FIXME prob not super clever to "toString()" the arg here. Addresses or array of addresses should remain as such.
            [arg.name]: proposal.args[index].toString() });
    }, {});
    return {
        authorId: 56,
        depositAmount,
        methodArguments: JSON.stringify(methodArguments),
        methodName
    };
});
main().catch(console.error);
// proposalAlreadyExist(0).then(proposal => console.log('proposal',proposal))
