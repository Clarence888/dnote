#!/bin/bash
# shellcheck disable=SC1090
# test-local.sh runs api tests using local setting
set -eux

basePath=$GOPATH/src/github.com/dnote/dnote/pkg/server/api


set -a
source "$basePath"/.env.test
set +a

"$basePath"/scripts/test.sh
