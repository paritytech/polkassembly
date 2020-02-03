This repo hosts the building blocks needed for Polkassembly.io
- auth-server: the nodeJS backend and its db responsible for user authentication.
- hasura: the docker that host the discussion db `governance-discussion` as well as the graphQL server that exposes the `governance-discussion` db to the Polkassembly application.
- chain-db-watcher: a service creating or updating the discussion db as soon as governance events happen on-chain.
- front-end: the React front-end application.

`launch.sh` is a script that helps (first stop and then) launch the dockers and server in the right order as well as applying the migrations for the different db.
