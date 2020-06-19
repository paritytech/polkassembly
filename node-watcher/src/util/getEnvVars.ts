export default () => {
    return {
        ARCHIVE_NODE_ENDPOINT: process.env.ARCHIVE_NODE_ENDPOINT || "wss://kusama-rpc.polkadot.io/",
        BLOCK_IDENTIFIER: process.env.BLOCK_IDENTIFIER || "IDENTIFIER",
        MAX_LAG: parseInt(process.env.MAX_LAG || '0'),
        PRISMA_ENDPOINT: process.env.PRISMA_ENDPOINT,
        START_FROM: parseInt(process.env.START_FROM || '0')
    }
}