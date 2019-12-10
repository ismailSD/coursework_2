#!/usr/bin/env sh
echo 'The following command terminates the "npm start" process using its PID'
set -x
kill -9 `cat /var/run/myProcess.pid`
