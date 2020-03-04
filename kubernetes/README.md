## HowTo Initialize/Setup **Gitlab-Ci / Kubernetes** integration.

This hast only to be done once is mentioned here only for the
purpose of documentation.

### Requirements:
* *Maintainer/Owner* Rights in gitlab-ci for the project in question.
* A running k8s cluster with admin rights assign to you.
* Read/Write Access to a (Docker)container Registry.

### Step by Step

1. Create a k8s namespace & ServiceAccount
```
kubectl apply -f ./kubernetes/init.yaml
```

2. Adding a your k8s cluster to gitlab-ci
Follow [this](https://docs.gitlab.com/ee/user/project/clusters/add_remove_clusters.html#add-existing-cluster) instructions
**but** use the *authentication_token* from the *ServiceAccount* created in step 1. and make sure to uncheck the *RBAC-enabled cluster* box.

3. Configure access to the Docker Registry
* login to manually to you registry in question
* run
```
kubectl -n polkassembly create secret generic regcred --from-file=.dockerconfigjson=$HOME/.docker/config.json --type=kubernetes.io/dockerconfigjson
kubectl -n polkassembly get secrets
```
to create the *secret* containing the required credentials in k8s.
* make the credentials available from within gitlab-ci (required to push images to the registry).
`cat $HOME/.docker/config.json | tr -d '\n'`. cut&paste resulting String into gitlab-ui -> Settings -> CI/CD -> Variables.

4. Manual Steps needed after deployment to run polkassembly in production:

- Create a bot user and set its id/credentials in auth server and chain db watcher
  - create a user named Bot User through signup
  - set botuser username in gitlab ci variable PROPOSAL_BOT_USERNAME. Needed as env var in chain db watcher.
  - set botuser password in gitlab ci variable PROPOSAL_BOT_PASSWORD. Needed as env var in chain db watcher.
  - set botuser user id in gitlab ci variable PROPOSAL_BOT_USER_ID. Needed as env var in auth server and chain db watcher.
- Run migrations in hasura
  We are using remote join branch of hasura where automatic migrations are not running. We need to run them maually.
  The steps are:
  - Clone the hasura cli and copy it in a directory in your PATH.

    ```bash
    git clone https://github.com/hasura/preview-remote-joins.git
    mv cli/cli-hasura-<arch> /usr/local/bin/hasura-dev
    chmod +x /usr/local/bin/hasura-dev
    ```
  - Port forward local 8080 port to hasura service
    - kubectl get service --namespace=polkassembly
    - kubectl port-forward svc/<hasura-service> 8080:8080 --namespace=polkassembly
  - run `hasura-dev migrate apply --admin-secret HASURA_GRAPHQL_ADMIN_SECRET`
- Reload metadata
 - This is needed after each deployment of auth server/hasura/node watcher
 - Expose hasura with a load balancer in k8s
 - goto ip:8080/console
 - enter admin secret from HASURA_GRAPHQL_ADMIN_SECRET
 - go to settings -> metadata
 - reload metadata

