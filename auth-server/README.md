# JWT Authentication server

JWT Authentication server for generating a JWT to use in the `Authentication` header by the built in JWT decoder in Hasura GraphQL Engine when started in JWT mode. We use symetric encryption for now. There's a shared secret between the hasura graphql-engine and the auth server (`ENCRYPTION_KEY` in `.env` file).

## Getting Started

### Deploy locally

#### Local Prerequisites

- `auth` postgreSQL up and accepting connections


#### Local instructions

Make sure you have docker and [docker-compose](https://docs.docker.com/compose/) installed on your computer.
Run the postgres and graphql-engine in docker by running:
- `docker-compose up`

Install node dependencies

```bash
yarn install
```

Generate a public private key pair for signing JWT token.

```bash
openssl genrsa -des3 -out private.pem 2048
```

Enter a passphrase. This will generate private.pem

```bash
openssl rsa -in private.pem -outform PEM -pubout -out public.pem
```

Enter passphrase again. This will generate public.pem

Set environment variables. Open/create a `.env` file and add the following env

```bash
JWT_KEY_PASSPHRASE="<JWT_KEY_PASSPHRASE>"
JWT_PRIVATE_KEY="private.pem file seperated with \n"
JWT_PUBLIC_KEY="public.pem file seperated with \n"
DATABASE_URL="postgres://postgres:postgres@localhost:5431/governance-auth"
REACT_APP_AUTH_URL="http://localhost:8010"
REACT_APP_SERVER_URL="http://localhost:8080/v1/graphql"
PORT=8010
BOT_PROPOSAL_USER_ID=1234
```

A special user identified by its id is our proposal bot. We should grant it with the `bot_proposal` role when it signs-in.

##### User Schema

The following `users` table is assumed to be present in your schema. The table can have additional fields too. To create this table initially run:
```bash
yarn migrate
```

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

### Signup

Once deployed or started locally, we can create an user using `/signup` API like below:

```bash
curl -H "Content-Type: application/json" \
     -d'{"username": "test123", "email": "test@test.com", "name": "test1 test2", "password": "test123", "confirmPassword": "test123"}' \
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

### Login
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
### Refresh token
A long living "refresh token" is automatically stored in an `http only` cookie at signup or login. To refresh the short living JWT token (to use for front-end requests) you can call the `/token` endpoint.

First login and store the cookie
```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"xyzxyz","password":"xyzxyzxyz"}' \
  --cookie 'cookie' \
  http://localhost:8010/login
```

Using the same cookie, you can get a refreshed short living JWT token.
```bash
curl \
  --request POST \
  --cookie 'cookie' \
  --cookie-jar 'cookie' \
  http://localhost:8010/token
```
on success, we get:

```bash
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI...net__NZHeUaIyruV2Q"
}
```

### Change password
We can use `/change-password` API to change user password

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"userId":1,"newPassword":"xyzxyz", "oldPassword":"xyzxyzxyz"}' \
  http://localhost:8010/change-password
```

On success, we get the response

```json
{ "message": "Password succefully changed" }
```

### Change name
We can use `/change-name` API to change user name

```bash
curl --header "Authorization: Bearer <token>" --header "Content-Type: application/json" --request POST --data '{"newName":"herewegoa"}' http://localhost:8010/change-name
```

On success, we get the response

```json
{ "message": "Name succefully changed" }
```
