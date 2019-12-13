This repo hosts the building blocks needed for Polkassembly.io
- auth-server: the nodeJS backend and its db responsible for user authentication.
- hasura: the docker that host the discission db `governance-discussion` and authentication db,`governance-auth`, as well as the graphQL server that exposes the `governance-discussion` db to the [governance platform](https://github.com/Tbaut/governance-platform/) application.
- node-watcher: a poc service creating forum posts automatically as soon as a proposal is posted on-chain
- front-end: the React front-end application

`launch.sh` is a script that helps (first stop and then) launch the dockers and server in the right order as well as applying the migrations for the different db.