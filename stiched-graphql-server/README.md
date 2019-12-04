# stiched graphql schema server

This node js app is used to enable schema stiching for auth-server and hasura server.

# Usage

Hasura and auth servers should be running on following urls.

hasura { uri: 'http://localhost:8080/v1/graphql' },
auth { uri: 'http://localhost:8010/auth/graphql' }

```sh
yarn
yarn start
```

Stiched server will be running on http://localhost:9010/