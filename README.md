This repo hosts the building blocks needed for [governance platform](https://github.com/Tbaut/governance-platform/) application.
- auth-server: the nodeJS backend and its DB responsible for user authentication
- hasura: the docker that hosts both general DB `public` and authentication DB,`auth`, as well as the graphQL server that exposes the `public` db to the [governance platform](https://github.com/Tbaut/governance-platform/) application.
- node-watcher: a service creating forum posts automatically as soon as a proposal is posted on-chain
