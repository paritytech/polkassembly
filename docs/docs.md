# Polkassembly documentation

## Architecture

Polkassembly follows microservices architecture. Main technologies used are typescript, node.js, react.js, postgres, redis, graphql, polkadot.js, hasura, prisma. It multiple node.js servers, react application, hasura and prisma server. Architecture diagram is shown here:

![polkassembly](https://user-images.githubusercontent.com/874046/117366012-c7eaee80-aedd-11eb-88e3-02cbb3a21634.png)

## Setup

Polkassembly contains multiple servers and applications. Prerequisite for running polkassembly locally:

- node.js
- docker
- docker-compose
- redis
- postgres

To run the complete application run launch.sh which will start all the application:

```
> sh launch.sh
```
Main frontend application will be shown at http://localhost:3000

## List of Applications:


- auth-server
- hasura
- chain-db-watcher
- front-end
- health-monitor
- node-watcher

auth-server
-- 
Auth server is a graphql server written in typescript and running on node.js. It provide authentication facility. Allow users to sign up and login using username and password. It uses JWT based authentication. auth-server is also responsible for sending emails for account creation and updates when on chain posts are created. User can also login using polkadot.js extension using digital signature. Auth server also keeps track of users linked addresses from polkadot.js extension

hasura
--
Hasura server is responsible for storing discussion data. Posts comments likes polls etc are stored in hasura server. This is written in golang. It has acl permission system having roles for users. It allows users to create edit posts comments. It also allow edit for on chain posts if user has linked its address. Hasura is also responsible for combining schema from other graphql servers and serving it in a secure way.

node-watcher
-- 

node watcher is a long running script wriiten in node.js which reads all the blocks from the chain and filter for governance events. It extact transform and loads governance data like proposal and referendum in prisma database.

chain-db-watcher
--

chain-db-watcher is a application monitoring node-watcher prisma server for onchain events like proposals, referendum, tips, treasuryProposal etc and load them to hasura server. It contains a botuser which create posts for governance events. These posts then can be edited by proposers of those posts.

## API
 
You can check the api docs [here](auth_schema.md) and [here](schema.md).

To checkout api intereactively with graphiql tools got to https://lucasconstantino.github.io/graphiql-online/ and change endpoint to https://kusama.polkassembly.io/v1/graphql
