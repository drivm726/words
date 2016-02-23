//Feel free to change these words:
//Feel free to change these words:
var nouns = ["hammer","cat","tree", "silence", "umbrella","sofa","shirt","jacket", "bottle", "computer", "dog", "ocean", "tshirt"];
var randomNouns;
var articles = ["The", "A", "An"];
var randomArticles;
var adjectives = ["blue", "happy", "black", "funny", "adorable", "dizzy", "cheerful", "grumpy", "gigantic", "mini", "short", "strange", "clumsy"];
var randomAdjectives;
var randNum;
var text1 = ["comic sans", "helvetica", "courier"];
var randomText;
var color1 = ["PaleVioletRed", "LightSteelBlue","PowderBlue", "DeepSkyBlue", "MediumAquaMarine", "LightPink", "MediumPurple"];

function setup() {
createCanvas(windowWidth, windowHeight);
randNum = floor(random(0,nouns.length-1));
randomArticles = floor(random(0,articles.length-1));
randomAdjectives = floor(random(0,adjectives.length-1));
randomNouns = floor(random(0,nouns.length-1));

randomText = floor(random(0,text1.length-1));
randomCol1 = floor(random(0,color1.length-1));
}

function draw(){
background("MistyRose");
fill(color1[randomCol1]);
textSize(50);
textFont(text1[randomText]);
text(articles[randomArticles]+" "+ adjectives[randomAdjectives]+" "+ nouns[randomNouns],100,100);

}
