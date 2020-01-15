# Chain DB watcher

This service is listening to a graphQL based chain DB and creates new proposal posts on Polkassembly.io as soon as an on-chain proposal is created.

## .env variable
```bash
USERNAME=bot # username to create proposals
PASSWORD=<create a password> # password for this bot to use for a signup.
REACT_APP_HASURA_GRAPHQL_URL="http://localhost:8080/v1/graphql"
AUTH_SERVER_LOGIN_URL="http://localhost:8010/login"
CHAIN_DB_GRAPHQL_URL="http://localhost:4466/"
HASURA_PROPOSAL_POST_TYPE_ID=2
BOT_PROPOSAL_USER_ID=6
```
## Run
- `yarn`
- `yarn start`