#!/usr/bin/env bash

set -e;

finish() {
    result=$?
    # Add cleanup code here
    exit ${result}
}
trap finish EXIT ERR
