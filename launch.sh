#!/bin/bash

# getopts "hfr" args;
# case $args in
# 	    h) # Display help.
# 			echo "Usage: $0 -f for node-watcher -fr for node-watcher with reset" 1>&2; exit 1;
# 			exit 0
# 			;;
# 		*)	;;
# esac

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

printf "\n-- stoping docker hasura_graphql-engine_1 hasura_postgres_1 auth-server_postgres_1\n"
docker stop hasura_graphql-engine_1 hasura_postgres_1 auth-server_postgres_1;

printf "\n\n-- deleting docker hasura_graphql-engine_1 hasura_postgres_1 auth-server_postgres_1\n"
docker rm hasura_graphql-engine_1 hasura_postgres_1 auth-server_postgres_1;

printf "\n\n-- killing any node running\n"
pkill -f node;

printf "\n\n-- launching auth-server docker\n"
cd $DIR/auth-server && docker-compose --file docker-compose.yaml up -d;

sleep 5

printf "\n\n-- launching auth-server\n"
cd $DIR/auth-server && yarn && yarn start &> auth.log &

sleep 5

printf "\n\n-- migrating auth-server\n"
cd $DIR/auth-server && yarn migrate &> auth-migration.log &

sleep 5

while getopts "fr" args; do
	case $args in
		f) 	printf "\n\n-- stoping node watcher docker\n"
			docker stop node-watcher_postgres_1 node_watcher_postgres_1 node-watcher_prisma_1

			printf "\n\n-- launching chain-db-watcher"
			cd $DIR/chain-db-watcher && yarn start &> chain-db-watcher.log &

			printf "\n\n-- launching chain-db docker\n"
			cd $DIR/node-watcher && docker-compose up -d;

			while getopts "r" args2; do
					case $args2 in
					r) 	printf "\n-- reset node watcher\n"
						sleep 5
						yarn reset -f;
						;;
					esac
				done

			printf "\n\n-- launching node watcher\n"
			yarn local &> node-watcher.log &

			printf "\n-- launch chain-db-open-server\n"
			cd $DIR/chain-db-open-server && yarn start:local &> chain-db-open-server.log &
			;;
	esac
done

sleep 15

printf "\n\n-- launching hasura docker\n"
cd $DIR/hasura && docker-compose up -d;

sleep 10

printf "\n\n-- hasura migration\n"
cd $DIR/hasura/hasura-migrations/migrations && hasura-dev migrate apply --admin-secret supersecret;

# printf "\n\n-- hasura reload metadata\n"
# cd $DIR/hasura/hasura-migrations && hasura-dev metadata reload --admin-secret supersecret;

printf "\n\n-- launching front-end\n"
cd $DIR/front-end && yarn && yarn start
