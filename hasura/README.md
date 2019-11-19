# Hasura

The main application's backend is provided by [Hasura](https://github.com/hasura/graphql-engine/). The main file in this repo `docker-compose.yml` lets us build a docker that hosts a postgres image and an hasura-graphql engine.

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
