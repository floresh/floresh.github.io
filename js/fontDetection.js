// OS Fingerprint??
// var macFonts = {'El Capitan': 'San Francisco', 'Yosemite': 'Helvetica Neue', 'Mavericks': 'Lucida Grande'};
// var winFonts = {'Vista': 'Segoe UI', 'XP': 'Tahoma' ,'3.1 to ME': 'Microsoft Sans Serif'};
// var andFonts = {'Ice Cream Sandwich (4.0)+': 'Roboto', 'Cupcake (1.5) to Honeycomb(3.2.6)': 'Droid Sans'};
// var ubuFonts = {'Ubuntu (all)': 'Ubuntu'};

// Not complete lists but enough to gain moderate differentiation between systems
var internationalFontsList = ['Baoli SC',  'Lantinghei SC', 'Lantinghei TC', 'Libian SC', 'Wawati SC', 'Wawati TC',
                                'Weibei SC', 'Weibei TC', 'Xingkai SC', 'Yuanti SC'];

var appleFontsList = ['Apple Casual', 'Apple Chancery', 'Apple Garamond', 'Apple Gothic', 'Apple Symbols'];

var systemFontsList = ['San Francisco', 'Helvetica Neue', 'Segoe UI', 'Microsoft Sans Serif', 'Roboto', 'Droid Sans',
                        'Ubuntu', 'Fira Sans', 'Oxygen', 'Cantarell'];

var commonFontsList = ['Arial', 'Helvetica', 'Comic Sans MS', 'Courier New', 'Georgia', 'Impact', 'Lucida Console',
                'Lucida Sans Unicode', 'Lucida Grande', 'Palatino Linotype', 'Book Antiqua', 'Tahoma', 'Geneva',
                'Times New Roman', 'Trebuchet MS', 'Verdana', 'Symbol', 'Webdings', 'Wingdings', 'Zapf Dingbats',
                'MS Sans Serif', 'MS Serif', 'New York', 'monospace', 'serif'];


function getTextDimension(font) {
    h = document.getElementsByTagName("body")[0]; // document
    d = document.createElement("div");      // text holder
    s = document.createElement("span");     // text goes here

    d.appendChild(s);
    d.style.fontFamily = font;

    s.style.fontFamily = font;
    s.style.fontSize = "72px";
    s.innerHTML = "Nothing to see here. Move along.";

    h.appendChild(d);
    textWidth = s.offsetWidth;
    textHeight = s.offsetHeight;
    h.removeChild(d);

    return [textWidth, textHeight];
}


function detectFonts() {
    var matches = [];
    var defaultFont = 'sans'; // ? is this always true ?
    var defaultDim = getTextDimension('non-existent font because i dont know if it ALWAYS defaults to sans');

    var lists = [commonFontsList, systemFontsList, internationalFontsList];
    for(list_index in lists) {
        fontList = lists[list_index];

        for (var font_index in fontList) {

            var font = fontList[font_index];
            var dim = getTextDimension(font);

            var same = false;
            if (dim[0] === defaultDim[0] && dim[1] === defaultDim[1]) {
                same = true;
            }

            matches.push(same);
            //console.log(font +', '+ dim[0] +', '+ dim[1] +'---- '+same);
        }
    }

    return matches;
}
