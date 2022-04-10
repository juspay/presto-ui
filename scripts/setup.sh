#!/usr/bin/env bash

set -e;

# Disabling post install on CI flag
# CI="true" ./scripts/setup.sh
if [ "$CI" == "true" ]; then
  echo "Skipping package's postinstall routine for CI environment";
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

# Installing git
if ! [ -x "$(command -v git)" ]; then
  echo "Installing git..."
  brew install git
else
  echo "GIT already installed."
fi

# Installing VSCode
if mdfind -name 'Visual Studio Code' | grep 'Visual Studio Code';
then
  echo 'VSCode already installed'
else
  echo 'Installing VSCode' >&2
  brew install --cask visual-studio-code
fi


# Installing node
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
husky install

# Used to sync markdown files with confluence as part of bitbucket pipeline
brew tap kovetskiy/mark
brew install mark