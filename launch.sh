#!/bin/bash

while getopts "frh" arg; do
	case $arg in
		    h | *) # Display help.
	      echo "Usage: $0 -f for node-watcher -fr for node-watcher with reset" 1>&2; exit 1;
	      exit 0
	      ;;
	esac
done

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

sleep 5

while getopts "frh" arg; do
	case $arg in
	    f) 	printf "\n\n-- stoping node watcher docker\n"
			docker stop node-watcher_postgres_1 node-watcher_prisma_1
			printf "\n\n-- launching chain-db\n"
			cd node-watcher && docker-compose up -d;

			while getopts "r" arg2; do
	  			case $arg2 in
				    r) 	printf "\n-- reset node watcher\n"
						sleep 5
						yarn reset -f;
				      	;;
	      		esac
	      	done

			printf "\n\n-- launching node watcher\n"
		  	yarn local &> node-watcher.log &
			
			printf "\n-- launch chain-db-open-server\n"
			cd ../chain-db-open-server && yarn start:local &> chain-db-open-server.log &
			cd ../
			;;
	esac
done

printf "\n\n-- launching hasura docker\n"
cd hasura && docker-compose up -d && cd ..;

sleep 5

printf "\n\n-- hasura migration\n"
cd hasura/hasura-migrations/migrations && hasura-dev migrate apply --admin-secret ip7itpC5L6R3RbNE4vkdZfsN && cd ../../..;

# printf "\n\n-- hasura reload metadata\n"
# cd hasura/hasura-migrations && hasura-dev metadata reload --admin-secret ip7itpC5L6R3RbNE4vkdZfsN && cd ../..;

printf "\n\n-- launching front-end\n"
cd front-end && yarn && yarn start &> front-end.log &
