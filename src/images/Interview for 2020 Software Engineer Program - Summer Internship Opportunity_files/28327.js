(function(self, ns){
    var GENERIC_BUNDLE_URL = "https://fast.appcues.com/generic/main/4.2.3/appcues.main.5fde6b16707074b0e033b9a1c2549e119f198d3d.js";
    var ACCOUNT_DETAILS = {"GENERIC_BUNDLE_DOMAIN":"https://fast.appcues.com","GENERIC_BUNDLE_PATH":"/generic/main/4.2.3/appcues.main.5fde6b16707074b0e033b9a1c2549e119f198d3d.js","RELEASE_ID":"5fde6b16707074b0e033b9a1c2549e119f198d3d","VERSION":"4.2.3","account":{"isTrial":false,"isTrialExpired":false,"keenScopedKeyWrite":"d7ba1f7d6752e7a5bc3b68bd62e109f6baf1fca625bf4d50629bbec0e62dce017d26224de82fa0f78bdea44630147eecb329fb9d63eba6d291431d8700593b7780f1008e3ac3eee2bb1e06144ae2b91e94ba384480e09d5417cca38aff9cb957c94e164c594a91fc32c68b17c34daf3352ea1cd81aac24d03a5523ad3c492cf089e16023e0aa534dcb79339ed4e01d5a","stripePlanId":"Appcues Standard (Monthly) - 500k","uuid":"7cc8efdc-1134-4a5d-9cd8-4f85ba4cb9f5"},"accountId":"28327","integrations":{"ga":{"id":"ga","integrationId":"28327:ga","isEnabled":true},"segment":{"id":"segment","integrationId":"28327:segment","isEnabled":true}},"styling":{"id":"-L2RhdN8CD8ZewLuyn95","typekitId":"rrt8gkf"}};
    var VERSION = ACCOUNT_DETAILS.VERSION;
    var RELEASE_ID = ACCOUNT_DETAILS.RELEASE_ID;
    var GENERIC_BUNDLE_DOMAIN = ACCOUNT_DETAILS.GENERIC_BUNDLE_DOMAIN;
    var accountId = ACCOUNT_DETAILS.accountId;

    self.AppcuesBundleSettings = {
      accountId: accountId,
      VERSION: VERSION,
      RELEASE_ID: RELEASE_ID,
      GENERIC_BUNDLE_DOMAIN: GENERIC_BUNDLE_DOMAIN,
      GENERIC_BUNDLE_PATH: ACCOUNT_DETAILS.GENERIC_BUNDLE_PATH,
      styling:  ACCOUNT_DETAILS.settings,
      integrations: ACCOUNT_DETAILS.integrations,
      account: ACCOUNT_DETAILS.account
    };

    var skipAMD = false;
    var windowGlobals = window["AppcuesSettings"];
    if (
      windowGlobals &&
      typeof windowGlobals === "object" &&
      windowGlobals.skipAMD === true
    ) {
      skipAMD = true;
    }

    var doc = self.document;
    self[ns] = self[ns] || [];
    var Appcues = self[ns];
    if (Appcues.invoked) {
        if (self.console && console.error) {
            console.error('Appcues snippet included twice.');
        }
        return;
    }

    if (Appcues.identify) return;
    Appcues.invoked = true;

    var methods = [
        "identify",
        "track",
        "page",
        "anonymous",
        "start",
        "show",
        "clearShow",
        "on",
        "off",
        "once",
        "reset",
        "debug",
        "user",
        "call",
        "settings",
        "content",
        "initMixpanel",
        "initHeap",
        "initIntercom",
        "initCIO",
        "initWoopra",
        "initAmplitude",
        "initKlaviyo",
        "initTD",
        "initLl",
        "initCalq",
        "initKM",
        "initGA",
        "initGTM",
        "initSegment",
        "injectContent",
        "injectStyles"
    ];

    var promises = [
        "user"
    ];

    function factory(method){
        return function(){
            var args = Array.prototype.slice.call(arguments);
            args.unshift(method);
            Appcues.push(args);
            return window.Appcues;
        };
    }

    // For each of our methods, generate a queueing stub.
    for (var i = 0; i < methods.length; i++) {
        var key = methods[i];
        Appcues[key] = factory(key);
    }

    for (var i = 0; i < promises.length; i++) {
        var key = promises[i];
        Appcues[key] = function() {
          var args = Array.prototype.slice.call(arguments);
          return new Promise(function(resolve, _reject) {
            args.unshift(resolve);
            args.unshift(key);
            Appcues.push(args);
          });
        };
    }

    if (
      !skipAMD &&
      typeof window.define === "function" &&
      window.define.amd &&
      (window.define.amd.vendor == null ||
        window.define.amd.vendor !== "dojotoolkit.org")
    ) {
      window.define(function() { return Appcues; });
    }

    function load(){
        var bundleScript = doc.createElement("script");
        bundleScript.type = "text/javascript";
        bundleScript.src = GENERIC_BUNDLE_URL;
        bundleScript.async = true;
        bundleScript.onload = function () {
            Appcues.forEach(function(call) {
                var fnName = call[0];
                var args = call.slice(1);
                if (promises.indexOf(fnName) === -1) {
                  self[ns] && self[ns][fnName] &&
                      self[ns][fnName].apply(self[ns], args);
                } else {
                  var resolve = args[0];
                  var promiseArgs = args.slice(1);
                  self[ns] && self[ns][fnName] &&
                    self[ns][fnName].apply(self[ns], promiseArgs).then(
                      function() { resolve(arguments[0]); }
                    );
                }
            });
        };

        var firstScript = doc.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(bundleScript, firstScript);
    }
    Appcues.SNIPPET_VERSION = VERSION;
    load();
})(window, 'Appcues');
