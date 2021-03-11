# Chain DB watcher

This service is listening to a graphQL based chain DB and creates new on-chain posts on Polkassembly.io as soon as an on-chain proposal is created.

## .env variable
```bash
# auth credentials for this user to create on-chain posts
PROPOSAL_BOT_USERNAME=bot
PROPOSAL_BOT_PASSWORD=<create a password>
PROPOSAL_BOT_USER_ID=<your bot user id>
REACT_APP_HASURA_GRAPHQL_URL="http://localhost:8080/v1/graphql"
CHAIN_DB_GRAPHQL_URL="http://localhost:4000/"
HASURA_PROPOSAL_POST_TYPE_ID=2
DEMOCRACY_TOPIC_ID=1
COUNCIL_TOPIC_ID=2
TREASURY_TOPIC_ID=4
HASURA_GRAPHQL_ADMIN_SECRET=<your admin secret>
START_FROM=0
HEALTH_PORT=8019
```
## Run
- `yarn`
- `yarn start`  

## Docker build
docker build -t paritytech/polkassembly-chain-db-watcher:master .
