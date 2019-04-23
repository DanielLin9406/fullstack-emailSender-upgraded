#!/bin/bash
# make sure you have execute permissions:
# cd /path/to/project
# chmod +x ./sendgrid_webhook.sh
# to run, type ./sendgrid_webhook.sh in the terminal

function localtunnel {
  lt -s $1 --port 5000
}
until localtunnel $1; do
echo "localtunnel server crashed"
sleep 2
done