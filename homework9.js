console.log("======Assignment 1========");
console.log("======Question 1========");
var reverseString=function(){
let s1="I am good IT Developer";
console.log(s1);
let vowel="aeiou";
let s2=s1.toLocaleLowerCase();
let c=0;
for(i=0;i<s2.length;i++){
    var char=s2.charAt(i);
   var isavailable=vowel.includes(char);
   if(isavailable)
   {
    console.log(char); 
    c++;
   }
   
}
console.log(`Total vowels in string:${c}`);

}
reverseString();
console.log("======Question 2========");
var cube=function(){
var num=1;
var add=0;
while(num<=5)
{
    add=add+(num*num*num);

    num++;
}
console.log(` Sum of Cube from 1 to 5:${add}`);
}
cube();
console.log("======Question 3========");
var oddPositionedChar=function(s1){
    console.log('---------------');
    console.log(s1);
var c="";
var n=s1.length-1;
for(i=0;i<=n;i++)
{
    var char=s1.charAt(i);
   if(i%2==1 && char!=' ')
   {
    c=c+char;
   }
}
console.log(`reverse string:${c}`);
}
oddPositionedChar("Hard work always play back");
oddPositionedChar("Soon I will be React champ");

console.log("======Assignment 2========");
console.log("======Question 1========");
var reverse1=function(s1){
    var n=s1.length-1;
    var c='';
    for(i=n;i>=0;i--){
        var char=s1.charAt(i);
        if(char!=' '){
         c=c+char;
        }
    }
    console.log(`Original String:${s1}`);
    console.log(`Reverse String:${c}`);
}
reverse1("Hard work always play back");
reverse1("Soon I will be React Champ");