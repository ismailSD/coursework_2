#!/usr/bin/env sh
echo 'The following command terminates the "npm start" process using its PID'
set -x
kill $'killall node'
