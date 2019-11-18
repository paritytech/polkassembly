# Hasura

The main application's backend is provided by [Hasura](https://github.com/hasura/graphql-engine/). The main file in this repo `docker-compose.yml` lets us build a docker that hosts a postgres image and an hasura-graphql engine.

We use the same postgres docker to host another DB, the `auth`, that needs to be created manually for now.

## Setup

Make sure you have docker and [docker-compose](https://docs.docker.com/compose/) installed on your computer.
Run the postgres and graphql-engine in docker by running:
- `docker-compose up`

The fact that we are using `image: hasura/graphql-engine:vx.y.z.cli-migrations` in `docker-compose.yaml` should perform a migration automatically. Visiting the `http://localhost:8080/console` should show you the tables `users`, `posts`...

### Manual migration
In case the `public` DB schema is empty, you'll need to run the migration manually:
- Make sure to install [hasura-cli](https://docs.hasura.io/1.0/graphql/manual/hasura-cli/index.html).
- `cd ./hasura-migrations` go to the migration directory
- `hasura migrate apply --admin-secret <YOUR_HASURA_ADMIN_SECRET>` to apply the migration


### Create the `auth` DB and a user
For now, we chose to host the DB to autenthicate users in the same postgres docker. Although `public` and `auth` have a very different purpose.
The `auth` DB needs to be created manually:
- `docker ps` to list the docker container running, you should have 2, one with "postgres" in its name, the other with "graphql-engine". We will access the bash console of the "postgres" docker, to create an `auth` DB as well as a new user+password to access it.
- `docker exec -it hasura_postgres_1 bash` replace "hasura_postgres_1" with the name of **your** postgres docker. You should be prompted with something like "root@c1de34e41006:/#" that indicates that you are root, in your docker.
- `# su - postgres` to switch to "postgres" user. This is the default user with admin access for managing postgres DBs. You should now be prompted with something like `postgres@c1de34e41006:~$` that indicates that you are login as "postgres", in your docker.
- `$ createuser <YOUR_NEW_USER>` will create a user that will be used to access our future `auth` DB.
- `$ createdb auth` will create an `auth` database
- `$ psql` will launch the psql command line interface in full admin mode. You should be prompted with `psql=#`.
- `# alter user <YOUR_NEW_USER> with encrypted password '<YOUR_NEW_PASSWORD>';` to define a password to your user. The `;` at the end of the line is important, since we are writing SQL here ;)
- `# grant all privileges on database auth to <YOUR_NEW_USER> ;` granting privileges on the `auth` database to your new user.
