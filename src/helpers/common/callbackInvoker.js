/* 

This function executes a function stored in a hashmap. 
It takes atleast a callback string (key for hashmap) to excute the function. 
In essence this is the read function for the global hashmap.
./callbackMapper.j is the write function for the global hashmap. 

While the function name contains `UI` in it, it is not related to UI is any way. 
It is mostly called after the UI is rendered but JBridge also calls it to call APIs. 

*/ 


function invokeUICallback () {
    let args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null,
        arguments));
    var fName = args[0]
    var functionArgs = args.slice(1)
    var currTime;
    var timeDiff;
    
    if (window.__ALL_ONCLICKS && window.__ALL_ONCLICKS.indexOf(fName) != -1 && args[2] == "feedback" && JBridge && JBridge.setClickFeedback) {
        return JBridge.setClickFeedback(args[1]);
    }
  
    if (window.__THROTTELED_ACTIONS && window.__THROTTELED_ACTIONS.indexOf(fName) == -1) {
        let proxyFnKey = fName;
        if (proxyFnKey.charAt(0) == '"')
            proxyFnKey = fName.substring(1, fName.length - 1);
        window.__PROXY_FN[proxyFnKey].apply(null, functionArgs);
    } else if (window.__LAST_FN_CALLED && (fName == window.__LAST_FN_CALLED.fName)) {
        currTime = getCurrTime();
        timeDiff = currTime - window.__LAST_FN_CALLED.timeStamp;
  
        if (timeDiff >= 300) {
            window.__PROXY_FN[fName].apply(null, functionArgs);
            window.__LAST_FN_CALLED.timeStamp = currTime;
        } else {
            console.warn("function throtteled", fName);
            console.warn("time diff", timeDiff);
        }
    } else {
        window.__PROXY_FN[fName].apply(null, functionArgs);
        window.__LAST_FN_CALLED = {
            timeStamp: (new Date()).getTime(),
            fName: fName
        }
    }
};

module.exports = {
    invoke : invokeUICallback
};