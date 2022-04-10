#!/usr/bin/env bash

set -e;

npx --no -- commitlint --edit 

finish() {
    result=$?
    # Add cleanup code here
    exit ${result}
}
trap finish EXIT ERR