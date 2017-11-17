# install
 - `npm i bower -g`
 - `npm i`
 - `bower i`
 - `mkdir dist`
 - `cp -a __dist/. dist/`

# IP changes if not running locally (port forwarding)
- MainActivity.java
```
private static final String BASE_URL = "http://IP_ADDRESS:8080"
 
```

# node_modules/sockjs-client/lib/main.js
  line no. 33

```javascript
if(url=="http:/sockjs-node"){
  url="http://IP_ADDRESS:8080/sockjs-node"             
}
```

# run
**npm run start-psc** will start the purescript compiler and set it to watch and recompile if changes occur in files. **npm start** will run the webpack process which will generate the final JS output.

Both of the processes must be running. Do:

```sh
$ npm run start-psc & npm start
```

to run both processes in in one termial. Or just run both processes seperately.


