# tech-exercise-api
Requirements:
* helm cli
* k8s cluster

Notes:
* This includes an ingress controller, but it can be ommited by renaming the ingress.yaml to ingress.yaml-bak or deleting it.  It's inside the chart/nodeserver/templates directory.
* NodeJS 14 using npm
* Dockerfile uses FROM: node:14.16.0-buster for debian nodejs on docker hubs
*  Assumes a new k8s cluster ( in this case on DigitalOcean.com but should work on any k8s opensource cluster)
* helm3 was used, however, the chart is compatible with helm2
* 

Instructions:

1. Image is at dockerhub and can be pulled
```sh
docker pull neotechadmin/tech-exercise-api
```
You may also build the docker image and push it to another repo.  Make sure to change the following to your new image repo in the chart/nodeserver/values.yaml:
```image:
  repository: <full repo url>
```
2. will create the helm deployment in the default namespace
```sh
cd tech-exercise-api/chart/nodeserver; helm install nodeserver .
```
3. Add the nginx ingress controller
```sh
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm install nginx-ingress ingress-nginx/ingress-nginx --set controller.publishService.enabled=true
```
4. Add an entry to your hosts file for the app hosts ingress routing: 'tech-exercise-api <K8S WORKER NODE IP>' or use dns.

If you use dns you have to change the following in chart/nodeserver/values.yaml to your dns resolvable domain/hostname and helm update: 
```sh
hostname: tech-exercise-api
```
```sh
cd tech-exercise-api/chart/nodeserver; helm upgrade nodeserver .
```
5. Test the endpoints ie. 
```sh
Working:

curl http://tech-exercise-api/version
curl -X GET -H "content-type: application/json" http://tech-exercise-api/is_prime --data '{"number": 36}'


WIP:  /weather
  curl -X GET -H "content-type: application/json" http://tech-exercise-api/weather --data '{"zipcode": 89523}'
```



