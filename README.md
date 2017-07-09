# Dynamic UI (DUI)
> DUI is a framework to build native android apps using javascript.



## Installation

Download [the latest AAR file][1] and add it to your android project.



## Getting the bundle

Refer [mystique](https://github.com/juspay/mystique) to get more information about how to write native UI and build javascript bundles using DUI.



## ProGuard

If you are using ProGuard you might need to add the following options:

```
-keep class in.juspay.mystique.** {*;}
-keep interface in.juspay.mystique.** {*;}

```


## Examples

[dui-demo](dui-demo) demonstrates a sample integration of this library and how to build apps using this framework.



## License

This project is licensed under the AGPL License - see the [LICENSE](LICENSE) file for details.
> Copyright (c) 2012-2017 [juspay.in](https://www.juspay.in)


## Contributing

See the [CONTRIBUTING.md](CONTRIBUTING.md) file for details.


[1]: https://s3-ap-southeast-1.amazonaws.com/juspay-assets-public/dui/in/juspay/mystique/0.2.13/mystique-0.2.13.aar
