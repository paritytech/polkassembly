# JWT Authentication server

JWT Authentication server for generating a JWT to use in the `Authentication` header by the built in JWT decoder in Hasura GraphQL Engine when started in JWT mode.

## Getting Started

### Deploy locally

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
PROPOSAL_BOT_USER_ID=1234
NODE_ENV=development
DATABASE_URL="postgres://<user>:<password>@localhost:5431/governance-auth"
HASURA_EVENT_SECRET="<shared secret key with hasura>"
DOMAIN_NAME="polkassembly.io"
DOMAIN_PROTOCOL="http://"
REDIS_URL="redis://:redis@127.0.0.1:6379"
```

`proposal_bot` is a special user identified by its id. We should grant it with the `proposal_bot` role when it signs-in.
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
To run tests in a docker and prevent your local db to be reset, make sure you adapt the envitonment variables from `docker-compose-test.yaml`.
It's important to create new keys that will be only used there.

You can then run
```bash
yarn test
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

## Usage Examples

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
