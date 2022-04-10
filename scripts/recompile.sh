#!/usr/bin/env bash

set -e;
TICKET=$(git log -1 | rev | cut -d/ -f1 | rev | grep -o -E "[A-Z]+-[0-9]+" | head -n1)
LATEST_TAG=$(git describe --tags --abbrev=0)
git remote set-url origin ${BITBUCKET_GIT_SSH_ORIGIN}
git config user.name "$GIT_USERNAME"
git config user.email "$GIT_EMAIL"
git push origin $LATEST_TAG
npx auto-changelog
git add documentation/CHANGELOG.md package.json
git commit -m "[skip ci] $TICKET chore(release) - Released a new version > $LATEST_TAG"
git push origin
# echo -e "<!-- Space: P -->\n<!-- Parent: Modules -->\n<!-- Title: PrestoUI -->\n$(cat CHANGELOG.md)" > CHANGELOG.md