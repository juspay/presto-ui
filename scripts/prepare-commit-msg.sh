#!/bin/bash

# Adding hooks to prepare commit message.
# This hook triggers Jira input modules.
# Helps in maintaining code compatblity.
exec < /dev/tty && node_modules/.bin/git-cz --hook || true