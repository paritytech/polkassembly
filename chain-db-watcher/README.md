# Chain DB watcher

This service is listening to a graphQL based chain DB and creates new proposal posts on Polkassembly.io as soon as an on-chain proposal is created.

## .env variable
```bash
PROPOSAL_BOT_USERNAME=bot # username to create proposals
PROPOSAL_BOT_PASSWORD=<create a password> # password for this bot to use for a signup.
PROPOSAL_BOT_USER_ID=6
REACT_APP_HASURA_GRAPHQL_URL="http://localhost:8080/v1/graphql"
CHAIN_DB_GRAPHQL_URL="http://localhost:4466/"
HASURA_PROPOSAL_POST_TYPE_ID=2
DEMOCRACY_TOPIC_ID=1
HASURA_GRAPHQL_ADMIN_SECRET=<your admin secret>
```
## Run
- `yarn`
- `yarn start`