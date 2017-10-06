//Create a pair of arrays containing the glyphs to be transcribed and the text to be displayed in the tooltip
var check = [];
var tool = [];

//katakana base characters
var katakanac = ["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","ガ","ギ","グ","ゲ","ゴ","サ","シ","ス","セ","ソ",
"ザ","ジ","ズ","ゼ","ゾ","タ","チ","ツ","テ","ト","ダ","ヂ","ヅ","デ","ド","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ",
"バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ヰ","ヱ","ヲ","ン"];
var katakanat = ["a","i","u","e","o","ka","ki","ku","ke","ko","ga","gi","gu","ge","go","sa","shi","su","se","so",
"za","ji","zu","ze","zo","ta","chi","tsu","te","to","da","ji","zu","de","do","na","ni","nu","ne","no","ha","hi","fu","he","ho",
"ba","bi","bu","be","bo","pa","pi","pu","pe","po","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","wi","we","o","n"];
check = check.concat(katakanac);
tool = tool.concat(katakanat);

//small katakana
var extrac = ["ャ","ュ","ョ","ァ","ィ","ゥ","ェ","ォ","ー","ッ"];
var extrat = ["ya","yu","yo","a","i","u","e","o","(extend preceding vowel)","(double following consonant)"];
check = check.concat(extrac);
tool = tool.concat(extrat);

//hiragana base characters
var hiraganabasec = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の",
"は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","ゐ","ゑ","を","ん"];
var hiraganabaset = ["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so","ta","chi","tsu","te","to","na","ni","nu","ne","no",
"ha","hi","fu","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","wi","we","wo","n"];
check = check.concat(hiraganabasec);
tool = tool.concat(hiraganabaset);

//hiragana characters with diacritics (dakuten, handakuten), and also the small hiragana characters
var hiraganaextendedc = ["が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど",
"ば","び","ぶ","べ","ぼ","ぱ","ぴ","ぷ","ぺ","ぽ","ゃ","ゅ","ょ","っ","ぁ","ぃ","ぅ","ぇ","ぉ","ゎ"];
var hiraganaextendedt = ["ga","gi","gu","ge","go","za","ji","zu","ze","zo","da","ji","zu","de","do",
"ba","bi","bu","be","bo","pa","pi","pu","pe","po","ya","yu","yo","(double following consonant)","a","i","u","e","o","wa"];
check = check.concat(hiraganaextendedc);
tool = tool.concat(hiraganaextendedt);








//Generate the style tag which defines the tooltip behaviour
var currentcss = "";
currentcss += "\n.tooltip {position: relative;display: inline-block;border-bottom: 1px dotted black;}";
currentcss += "\n.tooltip .tooltiptext {visibility: hidden;width: 120px;background-color: #555;color: #fff;text-align: center;border-radius: 6px;padding: 5px 0;position: absolute;z-index: 1;bottom: 125%;left: 50%;margin-left: -60px;opacity: 0;transition: opacity 0.5s;}";
currentcss += "\n.tooltip .tooltiptext::after {content: \"\";position: absolute;top: 100%;left: 50%;margin-left: -5px;border-width: 5px;border-style: solid;border-color: #555 transparent transparent transparent;}";
currentcss += "\n.tooltip:hover .tooltiptext {visibility: visible;opacity: 1;}";
currentcss += "\n";

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = currentcss;
document.getElementsByTagName('head')[0].appendChild(style);


//Find and replace the glyphs
var types = ["p","a","h2","h1","h3","h4"];
var allp = document.querySelectorAll(types);
for (var element in allp){
    paragraph = allp[element].innerHTML;
    var paralen = paragraph.length;
    var replacement = "";
    var none = 0;
    for (var i = 0, len = paralen; i < len; i++) {
        none = 0;
        for(var j = 0;j < check.length; j++){
          if(paragraph[i] == check[j]){
              replacement = replacement + "<div class=\"tooltip\">" + paragraph[i] + "<span class=\"tooltiptext\">" + tool[j] + "</span></div>";
              //Break out if glyph has been replaced
              j = check.length;
              none = 1;
          }
        }
        //Replace text with itself if nothing has been found
        if(none === 0){replacement = replacement + paragraph[i];}
    }
    allp[element].innerHTML = replacement;
}

/*
var allp = document.body.innerHTML;

    paragraph = allp;
    var paralen = paragraph.length;
    var replacement = "";
    var none = 0;

    for (var i = 0, len = paralen; i < len; i++) {
        none = 0;
        for(var j = 0;j < check.length; j++){
          if(paragraph[i] == check[j]){
              replacement = replacement + "<div class=\"tooltip\">" + paragraph[i] + "<span class=\"tooltiptext\">" + tool[j] + "</span></div>";
              j = check.length;
              none = 1;
          }
        }
        if(none === 0){replacement = replacement + paragraph[i];}
    }

document.body.innerHTML = replacement;
*/