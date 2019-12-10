#!/usr/bin/env sh

set -x
# sudo npm install --save-dev cross-env
set +x

echo 'The following "npm" command tests '
set -x
npm test
