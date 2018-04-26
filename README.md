# Presto Core
> Javascript framework for building platform independent apps.

[![npm version](https://img.shields.io/npm/v/presto-ui.svg?style=flat)](https://www.npmjs.com/package/presto-ui)

Get the SDK for:

 * [Android](https://github.com/juspay/dui-android)

_Soon for other platforms._

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Depending upon weather you are using it for Android or IOS or Web you may have to make "Android" or "IOS" or "Web" global variable available. This will ensure the right platform gets the necessary commands from the JS engine (Web view/browser).

### Installing
Install using npm

```
npm install presto-ui --save
```

### Development
1. Install the node modules.

```
npm install
```

2. Running the webpack dev server during development.

```
npm start
```

The server should be running on `http://localhost:8080`


### Building

If you want to generate `index_bundle.js` for shipping with your android/ios application. Then you can build it with this command.

```
npm run compile
```

The files will be written to `dist`

## License

This project is licensed under the AGPL License - see the [LICENSE](LICENSE) file for details.
> Copyright (c) 2012-2017 [juspay.in](https://www.juspay.in)


## Contributing

See the [CONTRIBUTING.md](CONTRIBUTING.md) file for details.
