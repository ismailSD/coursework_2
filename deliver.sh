#!/usr/bin/env sh

echo 'The following "npm" command builds our Node.js application for'
echo 'production in the local  directory'
echo 'correctly bundles node app in production mode and optimizes the build for'
set -x
npm run build
set +x


set -x
npm start &
sleep 1
echo $! > .pidfile
set +x

echo 'Now...'
echo 'Visit http://localhost:3000 to see your Node.js/React application in action.'
echo '(This is why you specified the "args ''-p 3000:3000''" parameter when you'
echo 'created your initial Pipeline as a Jenkinsfile.)'
