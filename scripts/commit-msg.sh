#!/usr/bin/env bash

set -e;

# Adding commit linter. Validates commit messges are according to format.
# Runs when commit message is created.
# TODO: need to verify
npx --no -- commitlint --edit 

finish() {
    result=$?
    # Add cleanup code here
    exit ${result}
}
trap finish EXIT ERR