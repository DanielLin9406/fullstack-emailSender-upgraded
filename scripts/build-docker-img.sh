#!/bin/bash
DOCKER_NAME=$1
SHA=$2

docker build -t $DOCKER_NAME/email-sender_api:latest -t $DOCKER_NAME/email-sender_api:$SHA ./api
docker build -t $DOCKER_NAME/email-sender_client:latest -t $DOCKER_NAME/email-sender_client:$SHA ./client
