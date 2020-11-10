# Welcome to your CDK JavaScript project!

This is a blank project for JavaScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app. The build step is not required when using JavaScript.

## Useful commands

 * `npm run test`         perform the jest unit tests
 * `cdk deploy`           deploy this stack to your default AWS account/region
 * `cdk diff`             compare deployed stack with current state
 * `cdk synth`            emits the synthesized CloudFormation template

## Docker Containers

We are using the very well/beautifully executed Minecraft docker container from [itzg][https://hub.docker.com/r/itzg/minecraft-server], see the docker-compose under the containers directory.

Requirements:

* Docker
* docker-compose

### To Build the Containers

`cd containers` and then `docker-compose build`

### To Run the Container

`docker-compose up -d` to run the container in Daemon Mode (in the background).