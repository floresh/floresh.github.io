var attributes = {};
attributes["User_Agent"] = navigator.userAgent;

// Insert Information Into Our Table
function insertValue(val, id) {
    var element = document.getElementById(id);
    var text = element.innerHTML;

    element.innerHTML = text + val;
}


window.onload = function() {
    var fp_1 = detectFonts();
    var hash_1 = sha256(fp_1.toString());

    var fp_2 = detectBrowser();
    var hash_2 = sha256(fp_2.toString());

    var fp_3 = getBrowserAttributes();
    var hash_3 = sha256(fp_3.toString());

    var fp_4 = screenAndNav();
    var hash_4 = sha256(fp_4.toString());

    var isMobile = detectMobile();

    var totalHash = sha256(hash_1 + hash_2 + hash_3 + hash_4 + isMobile);
    totalHash = totalHash.toString().substring(0, 10);

    var highestScore = -1;
    var highestBrowser = "";
    for(var key in fp_2) {

        var score = fp_2[key];

        if(score > highestScore) {
            highestBrowser = key;
            highestScore = score;
        }
    }

    insertValue(highestBrowser, 'browser_value');
    insertValue(totalHash, 'hash_value');

    console.log(fp_2);
};



function detectMobile() {
    var width = screen.width;
    var height = screen.height;

    if( width < 800 && height < 800) {
        return "mobile";
    }

    return "something else"
}



















