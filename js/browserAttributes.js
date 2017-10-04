function getBrowserAttributes() {

    var browserProperties = [];

    if (typeof navigator.vibrate === "function") {
        browserProperties.push("vibrate");
    }


    // check for existence and add the value of these attributes
    var methodsVal = ["taintEnabled"];
    var propertiesVal = ["oscpu", "vendor", "platform", "product", "userAgent", "plugins", "appName", "appCodeName",
        "appVersion", "doNotTrack", "buildID", "productSub", "cookieEnabled", "mimeTypes"];


    for (var property_i in propertiesVal) {

        var property = propertiesVal[property_i];
        if (navigator.hasOwnProperty(property)) {
            browserProperties.push(navigator[property]);
        }
    }

    for (var method_i in methodsEnum) {
        var method = methodsEnum[method_i];
        if (typeof navigator[method] === "function") {
            browserProperties.push(navigator[method]());
        }
    }


    // Check for existence of these attributes
    var methodsEnum = ['vibrate', 'taintEnabled'];
    var propertiesEnum = ['battery', 'getBattery', 'usb', 'activeVRDisplays', 'hardwareConcurrency', 'language', 'languages',
        'presentation', 'storageQuota',];


    for (property_i in propertiesEnum) {

        var property = propertiesVal[property_i];
        if (navigator.hasOwnProperty(property)) {
            browserProperties.push(property);
        }
    }

    for (var method_i in methodsEnum) {
        var method = methodsEnum[method_i];
        if (typeof navigator[method] === "function") {
            browserProperties.push(method);
        }
    }


    return browserProperties;
}
