#!/usr/bin/env bash

set -e;

# Adding commit linter. Validates commit messges are according to format.
# Runs before pushing commits.
# To try and fail VSCode and other editor commits if not properly fomratted. 
npx --no -- commitlint --edit 

finish() {
    result=$?
    # Add cleanup code here
    exit ${result}
}
trap finish EXIT ERR