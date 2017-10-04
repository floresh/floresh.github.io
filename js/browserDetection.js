// var standardMethods = ['javaEnabled', 'taintEnabled'];
// var standardProperties = ['appCodeName', 'appName', 'appVersion', 'cookieEnabled', 'geolocation', 'language',
//     'onLine', 'platform', 'product', 'userAgent'];








function detectBrowser() {
    // Opera 8.0+

    var isOpera = [];
    isOpera.push( !!window.opera );
    isOpera.push( !!window.opera || /opera|opr/i.test(navigator.userAgent) );
    // isOpera.push( (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0 );
    // isOpera.push( /^function \(/.test([].sort) );


    // Firefox 1.0+
    var isFF = [];
    isFF.push( (typeof InstallTrigger !== 'undefined') && !!window.sidebar );
    isFF.push( typeof InstallTrigger !== 'undefined' );
    isFF.push( !!window.globalStorage );


    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = [];
    isSafari.push( /constructor/i.test(window.HTMLElement) );
    isSafari.push( (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)) );
    isSafari.push( /a/.__proto__=='//' );


    // Internet Explorer 6-11
    var isIE = [];
    isIE.push( /*@cc_on!@*/false || !!document.documentMode) ;
    isIE.push( window.navigator.msPointerEnabled );
    isIE.push( !!window.ActiveXObject );
    isIE.push( navigator.appVersion.indexOf("MSIE 7.") !== -1 );
    isIE.push( document.all && !window.XMLHttpRequest );
    isIE.push( document.all && !document.querySelector );


    // Edge 20+
    var isEdge = [];
    isEdge.push( !isIE[0] && !!window.StyleMedia );
    isEdge.push( navigator.userAgent.indexOf('Edge') !== -1 );


    // Chrome 1+
    var isChrome = [];
    isChrome.push( !!window.chrome );
    isChrome.push( !!window.chrome && !!window.chrome.webstore );


    var scoresObj = {'Opera': isOpera, 'Firefox': isFF, 'Safari': isSafari, 'IE': isIE, 'Edge': isEdge, 'Chrome': isChrome};
    for(var key in scoresObj) {

        var total = 0;
        for(var i in scoresObj[key]) {
            if(scoresObj[key][i] === true) {
                total++;
            }
        }

        scoresObj[key] = total;
    }

    console.log(scoresObj);
    return scoresObj;
}
