var text='abcdefg';
var regex=new RegExp('abc');
console.log(regex.test(text));

var text1='my school is the ebst in tyhe world';
var regex=/school/g;
console.log(text1.match(regex));

var regex1=/[abc]/g;
console.log(text1.match(regex1));

var regex2=/[0-9]/g;
console.timeLog(text.match(regex2));

var regex3=/(top|best|school)/g;
console.log(text1.match(regex3));

