#!/bin/bash
# Name of repository at dockerhub
DOCKER_NAME=$1
SHA=$2

# Latest: To make sure we reclone or rebuild our cluster that the latest is truely the latest image.
# $SHA: To make sure we can correctly update stuff in production

docker push $DOCKER_NAME/email-sender_api:latest
docker push $DOCKER_NAME/email-sender_client:latest
docker push $DOCKER_NAME/email-sender_api:$SHA
docker push $DOCKER_NAME/email-sender_client:$SHA
