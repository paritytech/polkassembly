# Polkassembly - https://polkassembly.io
The place to discuss and vote on Kusama and Polkadot governance.

Polkassembly is a platform for anyone to discover and participate in Polkadot and Kusama governance. You can browse proposals made on chain, discuss with the community and vote directly from the website using a browser extension. Proposal authors are the only one able to edit the proposal post and description. You don't have to, but adding an email may help to recover your account, also you can get notifications for discussions of interrest or when a new proposal appears on-chain.

---

This repo hosts 
- auth-server: the nodeJS backend and its db responsible for user authentication.
- hasura: the docker that host the discussion db as well as the graphQL server that exposes the db to the Polkassembly application.
- chain-db-watcher: a nodeJS service creating or updating the discussion db as soon as governance events happen on-chain.
- front-end: the React front-end application available on https://polkassembly.io.

`launch.sh` is a script that helps (first stop and then) launch the dockers and servers in the right order as well as applying the migrations for the different db.
