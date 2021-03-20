# tech-exercise-api Comments

Notes:  
* I did deploy an ingress controller anyway.  
* The helm chart was adapted from this chart https://github.com/nodeshift/helm in the interest of time.
* The MarkDown files COMMENTS.md and README.md are not fully formatted as I wish they were.  This was due to time constraints.
* You can find the code here as well:  https://github.com/andre-brongniart/tech-exercise-api
* I was looking at setting up codefresh.io but was going to be more time then planned.

Could use additional improvements for both the app code and the k8s helm chart deployment:
*  proper logging output and error handling from the nodejs app
*  proper log aggregration service such as Elastic Stack/Graylog2/Splunk using an agent like fluentd
*  docker image scanning with CVE scanning such as tenable.io/crowdstrike
*  code base scanning for code QA such as with sonarQube
*  deploying Prometheus monitoring
*  deploying grafana
*  implementing a proper pipeline like with codefresh.io/jenkins/gilab-ci/github-ci/circle/etc.
*  proper handling of api.openweathermap.org API Key as a k8s secret
*  metrics-server deployment and configuration for an HPA
*  HPA
*  proper LoadBalancing
*  CA validated ssl terminated on the LB or CDN
*  CDN WAF proxy based inspection or WAF agent based such as signalscience
*  Weather app is dependent on a proper response from https://api.openweathermap.org/data/2.5/weather" with zipcode and appid (api key)  It returns 401 using needs further troubleshooting as it is not working per their documentation for 401 errors:
  ```sh
  curl https://api.openweathermap.org/data/2.5/weather?zip=89523&appid=4fd4e4733ecdfd7b2f7d46b77ee6a25a
  {"cod":401, "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."}
  ```
  
  It is possible that current weather is not available on the free plan, however it appeared to be available for the free plan when I signed up to get an API key.  Futher investigation needed.

  The appid is an active API key and the zip code is for Reno NV area.

Feedback:
  The assignment is propriately gauged for the k8s deployment as it's a DevOps Position.  The API coding was the most time consuming task to complete, specially the /weather endpoint was a bit of at time killer troubleshooting the 401 api key errors they are returning.  Perhaps increase the time expected to complete the API work, or remove 1 of the 2 API endpoints /is_prime or /weather.  Any given api dev could have tripped up on time on these.  Overall was a very fun task to work on since it had the API and the k8s DevOps deployment work.  
