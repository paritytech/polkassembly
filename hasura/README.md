# Hasura

The main application's backend is provided by [Hasura](https://github.com/hasura/graphql-engine/). The main file in this repo `docker-compose.yml` lets us build a docker that hosts a postgres image and an hasura-graphql engine.

## Setup

- To allow docker containers to reach each other, update your `/etc/hosts` to contain the following line:
`127.0.0.1    postgres`

- Make sure you have docker and [docker-compose](https://docs.docker.com/compose/) installed on your computer.
Copy docker-compose.yaml.example to docker-compose.yaml
`cp docker-compose.yaml.example docker-compose.yaml`

- Add a secret string to `HASURA_GRAPHQL_ADMIN_SECRET` in docker-compose.yaml
- Add JWT public key generated in auth server to `HASURA_GRAPHQL_JWT_SECRET`
- Run the postgres and graphql-engine in docker by running:
`docker-compose up`

### Needed rows

To make sure we are all using the same ids you need to run the following SQL in the hasura SQL console:
```sql
insert into post_topics values  (1, 'Democracy');
insert into post_topics values  (2, 'Council');
insert into post_topics values  (3, 'Technical Committee');
insert into post_topics values  (4, 'Treasury');
insert into post_topics values  (5, 'General');

insert into post_types values (1, 'Discussion');
insert into post_types values (2, 'On chain');
```

### Indexes

To make sure queries are fast on hasura db we need to run the following SQL in the hasura SQL conse

```sql
create index "posts_topic_id_index" on "posts" ("topic_id");
create index "posts_type_id_index" on "posts" ("type_id");
create index "comments_post_id_index" on "comments" ("post_id");
create index "onchain_links_post_id_index" on "onchain_links" ("post_id");
```

### Remote schema
We are using auth server from polkassembly as auth remote schema and node watcher from [Nomidot](https://github.com/paritytech/Nomidot) as another remote schema. Both should be running for hasura migrations to work.

They are configured as http://auth-server-service:8010/auth/graphql and http://nodewatcher.nodewatcher:4466 in hasura migrations yaml files. This is done for kubernetes to work.
So add these entries in /etc/hosts

```
127.0.0.1       auth-server-service
127.0.0.1       nodewatcher.nodewatcher
```

### Migration

We are using a [preview of hasura](https://github.com/hasura/graphql-engine/pull/2395#issuecomment-547378585), migration must therefore be applied manually with the `hasura-dev` cli.

In a separate directory, clone the hasura cli and copy it in a directory in your PATH.

```bash
git clone https://github.com/hasura/preview-remote-joins.git
mv cli/cli-hasura-<arch> /usr/local/bin/hasura-dev
chmod +x /usr/local/bin/hasura-dev
```

from there you can apply the migration:
```bash
cd hasura-migrations
hasura-dev migrate apply --admin-secret <your_admin_secret>
```

### Update the schema, relationships or permissions

Install hasura cli.

```bash
curl -L https://github.com/hasura/graphql-engine/raw/master/cli/get.sh | bash
```

To make sure any change in the console is reflected in the `hasura-migrations` folder and available to push to github you need to disable the console for any other participant (so that no change are made). Then launch the console using the cli:
- `cd ./hasura-migrations`
- `hasura console --admin-secret <your admin secret>`

This will open a new tab to localhost:<non-8080-port> where any change you do will be tracked.

### Manual migration
In case the `public` DB schema is empty, you'll need to run the migration manually:
- Make sure to install [hasura-cli](https://docs.hasura.io/1.0/graphql/manual/hasura-cli/index.html).
- `cd ./hasura-migrations` go to the migration directory
- `hasura migrate apply --admin-secret <YOUR_HASURA_ADMIN_SECRET>` to apply the migration
