//Level 1

//1
var challange='30 Days Of JavaScript';

//2
console.log(challange);

//3
console.log(challange.length);

//4
console.log(challange.toUpperCase());

//5
console.log(challange.toLowerCase());

//6
console.log(challange.substr(0,3));

//7
console.log(challange.substr(3,));

//8
console.log(challange.includes('Script'));

//9
console.log(challange.split(" "));

//10
console.log(challange.split(" "));

//11
let str='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(str.split(", "));

//12
console.log(challange.replace('JavaScript','Python'));

//13
console.log(challange.charAt(15));

//14
console.log(challange.charCodeAt(11));

//15
console.log(challange.indexOf('a'));

//16
console.log(challange.lastIndexOf('a'));

//17
let sentence='You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

//18
console.log(sentence.lastIndexOf('because'));

//19
console.log(sentence.search('because'));

//20
let s=' 30 Days Of JavaScript ';
console.log(s.trim());

//21
console.log(challange.startsWith('30'));

//22
console.log(challange.endsWith('JavaScript'));

//23
console.log(challange.matchAll('a'));

//24
let s1='30 days of'
let s2='JavaScript'
console.log(s1.concat(' ',s2));

//25
challange.repeat(2);


//Level 2

//1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

//2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

//3
console.log(typeof('10')==10);
console.log(parseInt('10')==10);

//4
console.log(parseFloat('9.8')==10);
console.log(parseInt(Math.ceil((parseFloat('9.8'))))==10);

//5
let p='Python';
let j='Jargon';
console.log(p.includes('on'));
console.log(j.includes('on'));

//6
let sen='I hope this course is not full of jargon';
console.log(sen.includes('jargon'));

//7
Math.floor(Math.random()*101);

//8
Math.floor(Math.random()*51)+50;

//9
Math.floor(Math.random()*256);

//10


//11
console.log(' 1 1 1 1 1 \n','2 1 2 4 8 \n','3 1 3 9 27 \n','4 1 4 16 64 \n','5 1 5 25 125');

//12
let b='because';
let i=sentence.indexOf('because')
console.log(sentence.substr(i,b.length*3+2));


//Level 3

//1
let l='Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log((l.match(/love/g)|| []).length);

//2
console.log((sentence.match(/because/g)||[]).length);

//3
const sent = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanSentence = sent.replace(/[^\w\s]|_/g, ""); // punctuation removed
let words = cleanSentence.split(/\s/); // Array of words.  Any whitespace is a delimiter.
let wordFrequencies = new Map();
words.forEach(function(word) {
    if (!wordFrequencies.has(word))
        wordFrequencies.set(word, 1);
    else
        wordFrequencies.set(word, wordFrequencies.get(word)+1);
});
// Now wordFrequencies maps each unique word to a frequency count.
let maxFrequency = Math.max(...wordFrequencies.values()); // Find max frequency of any word.
let wordsMatchingMaxFrequency = Array.from(wordFrequencies.keys()).filter((word) => {
    return wordFrequencies.get(word) === maxFrequency;
});
console.log(wordsMatchingMaxFrequency);

//4
const text = 'He earns 5000 euro from salary per\ month, 10000 euro annual bonus, 15000 euro\ online courses per month.';

const arr  = text.match(/\d+/g);

const totalAnnualIncome = (+arr[0] + +arr[2]) * 12 + +arr[1];

console.log(totalAnnualIncome);