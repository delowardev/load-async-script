/**
 * Async script loader
 *
 * @param src String
 * @param options Options
 */
function loadAsyncScript(src, options ) {
    const {
        onLoad = () => ({}),
        onError = () => ({}),
    } = options;

    if ( ! src  ) {
        return Promise.reject('Invalid source.');
    }

    return new Promise(( resolve, reject ) => {

        // prepare script
        const script = document.createElement("script");
        Object.assign(script, { type: "text/javascript", async: true, src });

        // events
        script.addEventListener("load", () => { resolve(script); onLoad( script ); });
        script.addEventListener("error", () => { reject(script); onError( script ); });

        // append script
        document.head.appendChild(script);
    })
}

// export
export default loadAsyncScript;
