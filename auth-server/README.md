# JWT Authentication server

JWT Authentication server for generating a JWT to use in the `Authentication` header by the built in JWT decoder in Hasura GraphQL Engine when started in JWT mode. We use symetric encryption for now. There's a shared secret between the hasura graphql-engine and the auth server (`ENCRYPTION_KEY` in `.env` file).

## Getting Started

### Deploy locally

#### Local Prerequisites

- `auth` postgreSQL up and accepting connections

#### Local instructions

- Make sure you have docker and [docker-compose](https://docs.docker.com/compose/) installed on your computer.
- Copy and adapt the content of `docker-compose.yaml.example` into a file called `docker-compose.yaml`.
- Run the postgres and graphql-engine in docker by running: 
```bash
docker-compose up
```

- Install node dependencies
```bash
yarn install
```

- Generate a public private key pair for signing JWT token.
```bash
openssl genrsa -des3 -out private.pem 2048
```
- Enter a passphrase. This will generate private.pem
- Generate the public key for it now running:
```bash
openssl rsa -in private.pem -outform PEM -pubout -out public.pem
```
- Enter the passphrase again. This will generate public.pem  

You will need the private and public keys in an escaped format in the next step.
Use the following commands to print them in the right format:
```bash
awk -v ORS='\\n' '1' private.pem
awk -v ORS='\\n' '1' public.pem
```

Set the needed environment variables. Open/create a `.env` file and add the following variables:

```bash
JWT_KEY_PASSPHRASE="<passphrase use to generate the private key>"
JWT_PRIVATE_KEY="<escaped private key>"
JWT_PUBLIC_KEY="<escaped public key>"
REACT_APP_AUTH_URL="http://localhost:8010"
REACT_APP_SERVER_URL="http://localhost:8080/v1/graphql"
PORT=8010
BOT_PROPOSAL_USER_ID=1234
NODE_ENV=development
DATABASE_URL="postgres://<user>:<password>@localhost:5431/governance-auth"
```

A special user identified by its id is our proposal bot. We should grant it with the `bot_proposal` role when it signs-in.
Note: you can delete the `private.pem` and `public.pem` files now.

##### Run

Some tables such as `users` and `refresh_tokens` are assumed to be present in your schema. To create this table initially run:
```bash
yarn migrate
```

To launch the server run

```bash
yarn start
```

You can now visit http://localhost:8010/auth/graphql where graphiql is running.

## Tests

### Docker
To run tests in a docker and prevent your local db to be reset, run 
```bash
yarn test:docker
```
Or do it manuall by building the docker container for test:

```bash
docker build -f test.Dockerfile -t paritytech/polkassembly-auth-test .
```

Then run this docker:

```bash
docker-compose -f docker-compose-test.yaml up --abort-on-container-exit
```
It will create a local postgres and test will run on top of that.  

### Locally
**=============DANGER===============**
The DB will be deleted at the end of the tests. If you run this on a live DB, it will be deleted.
Make sure you know what you are doing. This will run the tests locally on the test DB.

```bash
yarn test:dangerous
```

## Usage

### Get users

We can get the public information available for all our users:

```bash
curl 'http://localhost:8010/auth/graphql'
  -H "Content-Type: application/json" \
  --request POST \
  --data '{"operationName":null,"variables":{},"query":"{\n  users {\n    id\n    name\n    username\n  }\n}\n"}' \

```

On success, we get the response:
```json
{
  "data": {
    "users": [
      {
        "id": 2,
        "name": "John Doe",
        "username": "john"
      },
      ...
    ]
  }
}
```

### Signup

We can create an user using the signup mutation like below:

Using the following graphQL mutation:
```gql
mutation My_Sigup_function{
  signup(email:"test@email.com" password:"sup3er5ecurePassw0rd" username:"john" name:"John Doe"){
    user {
      id
    }
    token
  }
}
```

```bash
curl 'http://localhost:8010/auth/graphql' \
-H 'content-type: application/json' \
--data '{"operationName":null,"variables":{},"query":"mutation {\n  signup(email: \"test@email.com\", password: \"sup3er5ecurePassw0rd\", username: \"john\", name: \"John Doe\") {\n    user {\n      id\n    }\n    token\n  }\n}\n"}'
```

On success, we get the response:

```json
{
  "data": {
    "signup": {
      "user": {
        "id": 10
      },
      "token": "eyJhbGciOiJSUzI1...oP5tr_kaqb0073ysn1vzq74h7g"
    }
  }
}
```

### Login
We can login a user using the login mutation like below:

Using the following graphQL query:
```gql
mutation My_login_function{
  login(username:"john" password:"sup3er5ecurePassw0rd"){
    user {
      id
      username
			name
    }
    token
  }
}
```

```bash
curl 'http://localhost:8010/auth/graphql' \
-H 'content-type: application/json' \
--cookie 'cookie-file' \
--cookie-jar 'cookie-file' \
--data '{"operationName":null,"variables":{},"query":"mutation My_login_function {\n  login(username: \"john\", password: \"sup3er5ecurePassw0rd\") {\n    user {\n      id\n      username\n      name\n    }\n    token\n  }\n}\n"}'
```

Note that we need to support cookies as the refresh token (long living) will be set by the server.
On success, we get the response:

```json
{
  "data": {
    "login": {
      "user": {
        "id": 10,
        "username": "john",
        "name": "John Doe"
      },
      "token": "eyJhbGciOiJSUzI1Ni..DF9mD0e5ZtLr6If0g"
    }
  }
}
```
### Refresh token
A long living "refresh token" is automatically stored in an `http only` cookie at signup or login. To refresh the short living JWT token (to use for front-end requests) you can call the `/token` endpoint.

First login and store the cookie (see above), then using the same cookie, you can get a refreshed short living JWT token.

Using the following graphQL query:
```gql
query Get_new_token {
  token {
    token
  }
}
```

```bash
curl 'http://localhost:8010/auth/graphql' \
  -H 'content-type: application/json' \
  --data '{"operationName":null,"variables":{},"query":"query Get_new_token {\n  token {\n    token\n  }\n}\n"}' \
  --cookie 'cookie-file' \
  --cookie-jar 'cookie-file'
```
on success, we get:

```bash
{
  "data" :{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI...net__NZHeUaIyruV2Q"
  }
}
```

### Logout
We can logout user with `logout` mutation. Note that it needs an authorization header:

```gql
mutation Logout_function{
  logout {
    message
  }
}
```

```bash
curl 'http://localhost:8010/auth/graphql' \
-H "Authorization: Bearer eyJhbGciOiJSU...Hx0WG53yS4yhfRzxsQ2Q" \
-H "Content-Type: application/json" \
--data '{"operationName":null,"variables":{},"query":"mutation Logout_function {\n  logout {\n    message\n  }\n}\n"}'
```

On success, we get the response

```json
{
  "data": {
    "logout":{
      "message":"Successfully logged out"
    }
  }
}

### Change password
We can change a user password with the `changePassword` mutation. Note that it needs an authorization header:

```gql
mutation Change_password{
  changePassword(oldPassword:"sup3er5ecurePassw0rd" newPassword:"newSup3er5ecurePassw0rd"){
    message
  }
}
```

```bash
curl 'http://localhost:8010/auth/graphql' \
-H "Authorization: Bearer eyJhbGciOiJSU...Hx0WG53yS4yhfRzxsQ2Q" \
-H "Content-Type: application/json" \
--data '{"operationName":null,"variables":{},"query":"mutation Change_password {\n  changePassword(oldPassword: \"sup3er5ecurePassw0rd\", newPassword: \"newSup3er5ecurePassw0rd\") {\n    message\n  }\n}\n"}'
```

On success, we get the response

```json
{
  "data": {
    "changePassword":{
      "message":"Password succefully changed"
    }
  }
}
```

### Change name
We can change a user password with the `changeName` mutation. Note that it needs an authorization header:

```gql
mutation Change_name{
  changeName(newName:"Johnny Doe")
}
```

```bash
curl 'http://localhost:8010/auth/graphql' \
-H "Authorization: Bearer eyJhbGciOiJSU..7lpHx0WG53yS4yhfRzxsQ2Q" \
-H "Content-Type: application/json" \
--data '{"operationName":null,"variables":{},"query":"mutation Change_name {\n  changeName(newName: \"Johnny Doe\") {\n    message\n  }\n}\n"}'
```

On success, we get the response

```json
{
  "data":{
    "changeName":{
      "message":"Name succefully changed"
    }
  }
}
```

### Email verification
We can verify a user email by calling the `verifyEmail` mutation and pass the verification token:

```gql
mutation {
  verifyEmail(token: "1a068d3f-4260-4538-b0ef-2a6c91d562f4"){
    message
  }
}
```

```bash
curl 'http://localhost:8010/auth/graphql' \
-H "Content-Type: application/json" \
--data '{"operationName":null,"variables":{},"query":"mutation {\n  verifyEmail(token: \"1a068d3f-4260-4538-b0ef-2a6c91d562f4\") {\n    message\n  }\n}\n"}'
```

On success, we get the response

```json
{
  "data": {
    "verifyEmail": {
      "message": "Thank you for verifying your account"
    }
  }
}
```

### Reset Password
Reset password is a two step process. We can send reset password link to email by calling the `requestResetPassword` mutation and pass the email:

```gql
mutation {
  requestResetPassword(email: "test@example.com"){
    message
  }
}
```

```bash
curl 'http://localhost:8010/auth/graphql' \
-H "Content-Type: application/json" \
--data '{"operationName":null,"variables":{},"query":"mutation {\n  requestResetPassword(email: \"test@example.com\") {\n    message\n  }\n}\n"}'
```

On success, we get the response

```json
{
  "data": {
    "requestResetPassword": {
      "message": "The reset password link was sent to this email, if it exists in our database."
    }
  }
}
```

Next on receiving the reset password token in email we have to call `resetPassword` mutation with token
and new Password.

```gql
mutation {
  resetPassword(
    token: "23ads-asd-asda-asd"
    newPassword: "superSecret"
  ) {
    message
  }
}
```

```bash
curl 'http://localhost:8010/auth/graphql' \
-H "Content-Type: application/json" \
--data '{"operationName":null,"variables":{},"query":"mutation {\n  resetPassword(token: \"23ads-asd-asda-asd\", newPassword: \"superSecret\" \n) {\n    message\n  }\n}\n"}'
```

On success, we get the response

```json
{
  "data": {
    "resetPassword": {
      "message": "Password successfully reset."
    }
  }
}
```
