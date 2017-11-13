# Presto Android Runtime
> Is an android library required to build native android apps using presto-ui.


## Installation

Download [the latest AAR file][1] and add it to your android project.



## Getting the bundle

Refer [presto-ui](https://github.com/juspay/presto-ui) to get more information about how to write native UI and build javascript bundles using presto-ui.



## ProGuard

If you are using ProGuard you might need to add the following options:

```
-keep class in.juspay.presto.** {*;}
-keep interface in.juspay.presto.** {*;}

```


## Examples

[Sample App](demo) demonstrates a sample integration of this library and how to build apps using this framework.


## License

This project is licensed under the AGPL License - see the [LICENSE](LICENSE) file for details.
> Copyright (c) 2012-2017 [juspay.in](https://www.juspay.in)


## Contributing

See the [CONTRIBUTING.md](CONTRIBUTING.md) file for details.


[1]: https://s3-ap-southeast-1.amazonaws.com/presto-release/in/juspay/presto/0.2.13/presto-0.2.13.aar