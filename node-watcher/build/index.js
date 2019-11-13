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
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@polkadot/api");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const wsProvider = new api_1.WsProvider('wss://dev-node.substrate.dev');
        const api = yield api_1.ApiPromise.create({ provider: wsProvider });
        // const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {
        //   console.log(`Chain is at block: #${header.number}`);
        // });
        const unsub = yield api.query.democracy.publicProps((publicProps) => {
            publicProps.map(([idNumber, proposal]) => __awaiter(this, void 0, void 0, function* () {
                console.log('idNumber', idNumber.toNumber(), 'proposal', proposal);
                const unsub = yield api.query.democracy.depositOf(idNumber.toNumber(), (depositOf) => {
                    const deposit = depositOf.unwrapOr(null);
                    if (!deposit)
                        return;
                    // console.log('depositOf',deposit )
                    console.log('Who depositOf[1]', deposit[1].toString());
                    console.log('How much depositOf[0]', deposit[0].toString());
                });
            }));
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
    });
}
main().catch(console.error);
