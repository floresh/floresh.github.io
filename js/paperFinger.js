function screenAndNav() {
    // Fingerprinting Methods From Paper
    var uniqueValues = [];



    // 1: Enumerate navigator and screen object
    var enumerateScreenProperties = "";
    var enumerateNavigatorProperties = "";

    for (var property in screen)
        enumerateScreenProperties += property;
    for (var property in navigator)
        enumerateNavigatorProperties += property;

    uniqueValues.push(enumerateScreenProperties);
    uniqueValues.push(enumerateNavigatorProperties);




    // 2: Enumerate navigator and screen object to see if order changes
    var enumerateScreenProperties_order = "";
    var enumerateNavigatorProperties_order = "";

    for (var property in screen)
        enumerateScreenProperties_order += property;
    for (var property in navigator)
        enumerateNavigatorProperties_order += property;

    var diffScreenOrder = 0;
    var diffNavigatorOrder = 0;
    if (enumerateScreenProperties !== enumerateScreenProperties_order)
        diffScreenOrder = 1;
    if (enumerateNavigatorProperties !== enumerateNavigatorProperties_order)
        diffNavigatorOrder = 1;

    uniqueValues.push(diffScreenOrder);
    uniqueValues.push(diffNavigatorOrder);




    // 3: Create a custom object, populate it, and enumerate it
    var customObj = {};
    customObj["foo"] = 1;
    customObj["bar"] = 2;
    customObj["Best Professor at WPI"] = "Robert Walls";
    customObj ["one two"] = "Buckle My Shoe";

    var orderOne, orderTwo;
    for (var property in customObj)
        orderOne += property;
    for (var property in customObj)
        orderTwo += property;

    var diffCustomOrder = 0;
    if (orderTwo !== orderOne)
        diffCustomOrder = 1;

    uniqueValues.push(diffCustomOrder);




    // 4: Attempt to delete a property of the navigator object, the screen object, and the custom object
    var screenWidth = screen.width;
    var navigatorAppName = navigator.appName;

    var deleteWidth = delete screen.width;
    var deleteCustomObj = delete customObj.foo;
    var deleteCookiesEnabled = delete navigator.cookieEnabled;

    uniqueValues.push(deleteWidth);
    uniqueValues.push(deleteCustomObj);
    uniqueValues.push(deleteCookiesEnabled);




    // 5: Add the possibly deleted properties back to their objects
    var widthExists = "width" in screen;
    var appNameExists = "appName" in navigator;

    if (!("width" in screen)) {
        screen.width = screenWidth;
    }
    if (!("appName" in navigator)) {
        navigator.appName = navigatorAppName;
    }

    uniqueValues.push("width" in screen);
    uniqueValues.push("appName" in navigator);




    // 6: Attempt to modify an existing property of the navigator and screen objects
    var screenAH_new = "undefined";
    var navigatorPLAT_new = "SirachaMayo_64";

    screen.availHeight = screenAH_new;
    navigator.platform = navigatorPLAT_new;

    var screenMod = false;
    var navigatorMod = false;
    if (screen.availHeight === screenAH_new)
        screenMod = true;
    if (navigator.platform === navigatorPLAT_new)
        navigatorMod = true;

    uniqueValues.push(screenMod);
    uniqueValues.push(navigatorMod);




    // 7: If Object.defineProperty is implemented in current browser, utilize it to make an existing property in the navigator, screen, and custom object non-enumerable
    // We can check all properties but we must aggregate results since order may differ between runs
    var objs = [screen, customObj, navigator]
    for(var i in objs) {
        var obj = objs[i];

        for(var property in obj) {

            var enumerable = navigator.propertyIsEnumerable(property);

            if (enumerable === false) {

                Object.defineProperty(obj, property, {enumerable: true});

                if (obj.propertyIsEnumerable(property) === true) {
                    uniqueValues.push(true);
                } else {
                    uniqueValues.push(false);
                }

            } else if(enumerable === true) {

                Object.defineProperty(obj, property, {enumerable: false});

                if (obj.propertyIsEnumerable(property) === false) {
                    uniqueValues.push(true);
                } else {
                    uniqueValues.push(false);
                }
            }
            break;
        }
    }




    // 8: Attempt to delete the navigator and screen objects
    delete screen;
    delete navigator;

    uniqueValues.push(typeof screen);
    uniqueValues.push(typeof navigator);




    // 9: Attempt to assign new custom Objects to the navigator and screen variable names
    var testObj = {'foo':12, 'bar':6};

    screen = testObj;
    uniqueValues.push(screen === testObj);

    navigator = testObj;
    uniqueValues.push(navigator === testObj);




    return uniqueValues;
}




















