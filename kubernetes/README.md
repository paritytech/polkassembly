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
