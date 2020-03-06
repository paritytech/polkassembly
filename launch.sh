#!/bin/bash
printf "\n-- stoping docker hasura_graphql-engine_1 hasura_postgres_1 auth-server_postgres_1\n"
docker stop hasura_graphql-engine_1 hasura_postgres_1 auth-server_postgres_1;

printf "\n\n-- deleting docker hasura_graphql-engine_1 hasura_postgres_1 auth-server_postgres_1\n"
docker rm hasura_graphql-engine_1 hasura_postgres_1 auth-server_postgres_1;

printf "\n\n-- killing any node running\n"
pkill -f node;

printf "\n\n-- launching auth-server docker\n"
cd auth-server && docker-compose --file docker-compose.yaml up -d && cd ..;

sleep 5

printf "\n\n-- launching auth-server\n" 
cd auth-server && yarn && yarn start &> auth.log &

sleep 5

printf "\n\n-- migrating auth-server\n" 
cd auth-server && yarn migrate &> auth-migration.log &

sleep 15

printf "\n\n-- launching hasura docker\n"
cd hasura && docker-compose up -d && cd ..;

sleep 5

printf "\n\n-- hasura migration\n"
cd hasura/hasura-migrations/migrations && hasura-dev migrate apply --admin-secret ip7itpC5L6R3RbNE4vkdZfsN && cd ../../..;

# printf "\n\n-- hasura reload metadata\n"
# cd hasura/hasura-migrations && hasura-dev metadata reload --admin-secret ip7itpC5L6R3RbNE4vkdZfsN && cd ../..;

printf "\n\n-- launching front-end\n"
cd front-end && yarn && yarn start &> front-end.log &
