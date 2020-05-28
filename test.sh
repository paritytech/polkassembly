#!/bin/bash

while getopts "frh" arg; do
  case $arg in
    f) 	printf "\n\n-- stoping node watcher docker\n"
		docker stop node-watcher_postgres_1 node-watcher_prisma_1
		printf "\n\n-- launching chain-db\n"
		cd node-watcher && docker-compose up -d;

		while getopts "r" arg2; do
  			case $arg2 in
			    r) printf "\n-- reset node watcher\n"
					sleep 5
					yarn reset -f;
			      ;;
      		esac
      	done

		printf "\n\n-- launching node watcher\n"
	  	yarn local &> node-watcher.log &
		
		printf "\n-- launch chain-db-open-server\n"
		cd ../chain-db-open-server && yarn start:local &> chain-db-open-server.log &
		;;
    h | *) # Display help.
      echo "Usage: $0 -f for node-watcher -fr for node-watcher with reset" 1>&2; exit 1;
      exit 0
      ;;
  esac
done