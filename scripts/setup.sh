#!/usr/bin/env bash

set -e;

# Disabling post install on CI flag
# CI = true is added by bitbucket
# CI = 1 is added by Vercel
# Might require more CI/Dev flags based on environments.
if [ "$CI" == "true" ] || [ "$CI" == "1" ]; then
  echo "Skipping package's postinstall routine for CI environment";
  exit 0;
fi

# Ensuring this scrip runs only for when current repo is in dev.
# Adding to prepare command runs the scripts when lib
# is used as a dependency.
# Checking if Npm directory is same as current directory.
if [ "$INIT_CWD" != "$PWD" ]; then
  echo "Skipping package's postinstall when used as an npm module";
  exit 0;
fi

# Setting other scripts as executable
chmod +x ./scripts/pre-commit.sh
chmod +x ./scripts/prepare-commit-msg.sh
chmod +x ./scripts/commit-msg.sh
chmod +x ./scripts/pre-push.sh

# Check for Homebrew,
# Install if we don't have it
if ! [ -x "$(command -v brew)" ]; then
  # Ask for the administrator password upfront
  echo "------------------------------"
  echo "Sudo access is required for setup."
  sudo -v
  # Keep-alive: update existing `sudo` time stamp until `setup.sh` has finished
  while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

  echo "------------------------------"
  echo "Installing Xcode Command Line Tools."
  # Install Xcode command line tools
  xcode-select --install
  
  
  echo "Installing homebrew..."
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
else
  echo "Brew already installed."
fi

# Check for git
# Install if we don't have it
if ! [ -x "$(command -v git)" ]; then
  echo "Installing git..."
  brew install git
else
  echo "GIT already installed."
fi

# Check for VSCode
# Install if we don't have it
if mdfind -name 'Visual Studio Code' | grep 'Visual Studio Code';
then
  echo 'VSCode already installed'
else
  echo 'Installing VSCode' >&2
  brew install --cask visual-studio-code
fi

# Check for node
# Install if we don't have it
if ! [ -x "$(command -v node)" ]; then
  echo "Installing node..."
  brew install node
else
  echo "Node already installed."
fi

# Installing plugins for VSCode
# Incase command fails, in VSCode cmd+shift+p
# and install 'code' command in path
# code --install-extension jebbs.plantuml

# husky install to setup pre-commit hooks
npx husky install

# Used to sync markdown files with confluence as part of bitbucket pipeline
# TODO: Think if mark should be added everywhere?
# +Helps verify HTML generated locally.
# -??
brew tap kovetskiy/mark
brew install mark