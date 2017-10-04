var attributes = {};
attributes["User_Agent"] = navigator.userAgent;

// Insert Information Into Our Table
function insertValue(val) {
    var h2 = document.createElement("h2");
    h2.innerText = val;

    var div = document.getElementById("value_value");
    div.appendChild(h2);
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

    var totalHash = sha256(hash_1 + hash_2 + hash_3 + hash_4);
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

    insertValue(highestBrowser);
    insertValue(totalHash);
};























