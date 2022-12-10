# Async Script Loader

A tiny script for loading 3rd party scripts asynchronously such as loading Google Maps or reCaptcha script. 


# Usage:

```javascript

// import
import loadAsyncScript from 'load-async-script';


// usage
const scriptPromise = loadAsyncScript( '__SCRIPT_SRC__', { 
    onLoad: scriptOnLoad, 
    onError: scriptOnError 
} );


// script on load callback
function scriptOnLoad() {
    console.log( 'script loaded' )
}

// script error callback
function scriptOnError() {
    console.log( 'script loaded' )
}

// or use promise
scriptPromise.then( () => {
    console.log( 'script loaded' )
}).catch( ( reason ) => {
    console.log( reason )
})

```
