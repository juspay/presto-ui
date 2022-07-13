#!/usr/bin/env bash

set -e;

# Running conditional version upgrades
LAST_COMMIT_MSG=$(git log -1)
if echo "$LAST_COMMIT_MSG" | grep -E "!:";then
	echo "Matches !:.\nBumping major version"
	npx standard-version --no-verify --release-as major
elif echo "$LAST_COMMIT_MSG" | grep -E "feat:|perf:|refactor:";then
	echo "Matches feat:|perf:|refactor:.\nBumping minor version."
	npx standard-version --no-verify --release-as minor
elif echo "$LAST_COMMIT_MSG" | grep -E "fix:";then
	echo "Matches fix:.\nBumping patch version."
	npx standard-version --no-verify --release-as patch
else
	echo "No defined Matches.\n No version bump."
	return;
fi

# Triggered via CI pipeline workflow on merge to release branch.
# Generate changelog
npx auto-changelog
# Push updated files.
# ---------------------
# Extract last commit ticket
TICKET=$(git log -1 | grep -o -E "[A-Z]+-[0-9]+" | head -n1)
# Getting last generated tags
LATEST_TAG=$(git describe --tags --abbrev=0)
# Setting up few git properties.
# SSH Url, Username and Email needs to be set to make sure
# automation is pushed using Titan creds.
git remote set-url origin ${BITBUCKET_GIT_SSH_ORIGIN}
git config user.name "$GIT_USERNAME"
git config user.email "$GIT_EMAIL"
# Add and push updated files.
# :Can be made better by lopping on files and only commiting if any files have changed.
npm run compile
git add docs/CHANGELOG.md package.json lib
git commit -m "[skip ci] $TICKET: chore: Released $LATEST_TAG"
git push origin
# Pushing the tag manually instead of via standard-version library
# because want to make sure above steps are completed before pushing a version to git.
git tag -d $LATEST_TAG
git tag $LATEST_TAG
git push origin $LATEST_TAG
# -----------------------
