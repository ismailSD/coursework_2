#!/usr/bin/env sh
echo 'The following command terminates the "npm start" process using its PID'
set -x
trap 'kill $(jobs -pr)' SIGINT SIGTERM EXIT
