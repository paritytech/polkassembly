
# Governance Platform

## Setup

This app relies on a database for users, posts, etc. Those need to be in place before the app is started in order to have information to display and users to login.

### Databases
2 different databases are required to run this app. They are explained here, but the files needed to run them live in the [hasura-auth](https://github.com/Tbaut/hasura-auth/) repo.
- Hausra: A general DB to store posts, some user information (anything that isn't used for authentication). It's a Postgres, based on Hasura, exposing a graphQL interface that this `Government platform` will talk to.
- Auth: a DB dedicated for user authentication that is accessed by the `auth` server.

### env variable

Create a `.env` file with the following environmen variable 
```
REACT_APP_AUTH_SERVER_GRAPHQL_URL="http://localhost:8010/auth/graphql"
REACT_APP_ENV="dev"
REACT_APP_HASURA_GRAPHQL_URL="http://localhost:8080/v1/graphql"
REACT_APP_JWT_PUBLIC_KEY="-----BEGIN PUBLIC KEY-----\nMIIBI...wIDAQAB\n-----END PUBLIC KEY-----"


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

