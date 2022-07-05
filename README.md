<!-- Space: P -->
<!-- Parent: Modules -->
<!-- Title: PrestoUI -->
<!-- Label: Readme -->
<!-- Label: prestoUI -->
<!-- Label: library -->
<!-- Include:  docs/templates/disclaimer.md -->
# Presto UI

<!-- Include: ac:toc -->

> Javascript framework for building platform independent apps.

[![npm version](https://img.shields.io/npm/v/presto-ui.svg?style=flat)](https://www.npmjs.com/package/presto-ui)

Presto UI is a Javascript framework which connects with other Presto and Hyper libraries to provide a cross platform compatible and type safe environment for development.

In itself presto-ui takes markup as input and generates commands consumed by low level platform specific libraries.

For **web**, presto-ui generates vanilla js and css.

For general use case you would need to use a micro-app sample and native test tools.
<!-- Add details about all frameworks -->
## Getting Started

To add presto-ui to your repo you will need run below commands.
```
npm install git+ssh://git@bitbucket.org/juspay/presto-ui.git

```
## Debugging

For debugging presto-ui locally, you can start a server and link the project locally in node modules.

Install dev and other dependencies.
```
npm install
```
This will install required dependencies and setup required git hooks.

Start a local dev server
```
npm start
```

A server is started at [http://localhost:8080](http://localhost:8080)

For debugging we will link presto-ui locally from current running server.

In the project where you want to test presto-ui, run below commands to link presto-ui in node_modules.
```
rm -rf ./node_modules/presto-ui/lib
ln -s ./node_modules/presto-ui/lib <path-to-presto-ui>/lib
```
> After every `npm i` you will need to link again
## Contributing

We use git hooks to verify commit messages so
make sure to use `terminal` to commit your changes.

> Do not use VSCode to commit any changes !!!

Git push will fail if commit message is not proper.

```
git commit
```
or
``` zsh
gc #for zsh
```

Changelog is auto-generated and pushed to confluence docs once pr is merged to `release`.

In case you are inside the `vi` editor, please press `:` then `wq` and `enter` to exit by saving the commit.

While committing you can press `enter` to take the selected `Jira TicketID` and other defaults, in case of rebase you will need to enter commit message again and correct Jira TicketID.

Make sure to add proper details in commits or PR's can be rejected.
