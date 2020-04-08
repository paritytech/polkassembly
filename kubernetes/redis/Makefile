PROJECT:= "redis"
RELEASE_NAME:= "redis"
VERSION:= "10.6.2"
KUBE_NAMESPACE:="polkassembly"

init: 
	# stable kubernetes-charts.storage.googleapis is depricated
	# helm repo add stable https://kubernetes-charts.storage.googleapis.com
	# moved to:
	helm repo add bitnami https://charts.bitnami.com/bitnami
	helm repo update

fetch:
	helm pull bitnami/${PROJECT} \
 --untar \
 --version ${VERSION} \
 --untardir ./charts 


fetch_latest:
	helm pull bitnami/${PROJECT} \
 --untar \
 --untardir ./charts

render:
	helm template ${RELEASE_NAME} charts/${PROJECT} \
 --debug \
 --namespace ${KUBE_NAMESPACE} \
 --values values/$${CI_ENVIRONMENT_NAME}.yaml \
 --output-dir manifests
 
test:
	helm upgrade ${RELEASE_NAME} charts/${PROJECT} \
 --dry-run \
 --install \
 --namespace ${KUBE_NAMESPACE} \
 --values values/$${CI_ENVIRONMENT_NAME}.yaml 

install:
	helm upgrade ${RELEASE_NAME} charts/${PROJECT} \
 --install \
 --namespace ${KUBE_NAMESPACE} \
 --values values/$${CI_ENVIRONMENT_NAME}.yaml 

clean:
	rm -rf ./charts/* ./manifests/* rmdir ./charts ./manifests/ rm ./values/${PROJECT}.yaml

.PHONY: fetch render test deploy clean
