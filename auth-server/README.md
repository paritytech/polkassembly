# JWT Authentication server

JWT Authentication server for generating a JWT to use in the `Authentication` header by the built in JWT decoder in Hasura GraphQL Engine when started in JWT mode. We use symetric encryption for now. There's a shared secret between the hasura graphql-engine and the auth server (`ENCRYPTION_KEY` in `.env` file).

## Getting Started

### Deploy locally

#### Local Prerequisites

- `auth` postgreSQL up and accepting connections


#### Local instructions

Install node dependencies

```bash
yarn install
```

Set environment variables. Open/create a `.env` file and add the following env

```bash
ENCRYPTION_KEY="<JWT_ENCRYPTION_KEY>"
DATABASE_URL="postgres://<DB_USER>:<DB_USER_PASSWORD>@localhost:5432/auth"
REACT_APP_AUTH_URL="http://localhost:8010"
REACT_APP_SERVER_URL="http://localhost:8080/v1/graphql"
PORT=8010
BOT_PROPOSAL_USER_ID=1234
```

A special user identified by its id is our proposal bot. We should grant it with the `bot_proposal` role when it signs-in.
 
##### User Schema

The following `users` table is assumed to be present in your schema. The table can have additional fields too.

| name       | type    | nullable | unique | default | primary |
| ---------- | ------- | -------- | ------ | ------- | ------- |
| id         | Integer | no       | yes    |         | yes     |
| username   | Text    | no       | yes    |         | no      |
| email      | Text    | no       | yes    |         | no      |
| password   | Text    | no       | no     |         | no      |
| token      | Text    | no       | no     |         | no      |
| created_at | Date    | no       | no     | now()   |         |

Then start your app

```bash
yarn start
```

## Usage

### Signup/Login

Once deployed or started locally, we can create an user using `/signup` API like below:

```bash
curl -H "Content-Type: application/json" \
     -d'{"username": "test123", "password": "test123", "confirmPassword": "test123"}' \
     http://localhost:8010/signup
```

On success, we get the response:

```json
{
  "user": {
    "id": 1,
    "username": "test123"
  },
  "token": "eyJhbGciOiJ...I6IkpXVCJ"
}
```

We can also use `/login` API to fetch the user token:

```bash
curl -H "Content-Type: application/json" \
     -d'{"username": "test123", "password": "test123"}' \
     http://localhost:8010/login
```

On success, we get the response:

```json
{
  "user": {
    "id": 1,
    "username": "test123"
  },
  "token": "eyJhbGciOiJ...I6IkpXVCJ"
}
```