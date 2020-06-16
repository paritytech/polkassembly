
# Governance Platform

## Setup

This app relies on a database for users, posts, etc. Those need to be in place before the app is started in order to have information to display and users to login.

### Databases
2 different databases are required to run this app. They are explained here, but the files needed to run them live in the hasura and auth-server folders.
- Hausra: A general DB to store posts, some user information (anything that isn't used for authentication). It's a Postgres, based on Hasura, exposing a graphQL interface that this `Governance platform` will talk to.
- Auth: a DB dedicated for user authentication that is accessed by the `auth` server.

### env variable

Create a `.env` file with the following environmen variable
```
REACT_APP_HASURA_GRAPHQL_URL="http://localhost:8080/v1/graphql"
REACT_APP_JWT_PUBLIC_KEY="-----BEGIN PUBLIC KEY-----\nMIIBI...wIDAQAB\n-----END PUBLIC KEY-----"
REACT_APP_NETWORK="polkadot"
REACT_APP_WS_PROVIDER="wss://rpc.polkadot.io" # ws://127.0.0.1:9944

# used for graphql type generation
HASURA_GRAPHQL_ADMIN_SECRET= "<YOUR_HASURA_ADMIN_SECRET>"
```

## Init and Run

### Install Dependencies
- `yarn`

### Generate types

We use `@graphql-codegen` to generate types directly form the DB types (hasura). You need to generate the types any time the DB structure is changed.
- `yarn codegen`

### Run
In the project directory, you can run:
- `yarn; yarn start`

## HealthCheck Url

healthcheck url for front end nginx server is:

```
/healthcheck
```
