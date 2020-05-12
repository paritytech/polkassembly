## health-monitor

Health monitor service for Polkassembly. Provides a single API endpoint which checks the health of all Polkassembly components.

## Installation

Configure environment variables with a .env file with following values.

```bash
PORT=8034
AUTH_SERVER="http://localhost:8010"
HASURA_SERVER="http://localhost:8080"
CHAIN_DB_WATCHER_SERVER="http://localhost:8019"
CHAIN_DB_SERVER="http://0.0.0.0:4000"
CHAIN_DB="http://0.0.0.0:4466"
REACT_SERVER="http://localhost:3000"
ARCHIVE_NODE_ENDPOINT="wss://kusama-rpc.polkadot.io"
```

