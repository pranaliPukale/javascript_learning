console.log("=======Assignment 1========");
console.log("=======Question 1======");
var wordLengthSquare=function(num1){
var res=num1.length;
return (res*res)
}

var s= wordLengthSquare("JavaScript");
console.log(`JavaScript Length square is:${s}`);
var s= wordLengthSquare("Google");
console.log(`Google Length square is:${s}`);
var s= wordLengthSquare("Developer");
console.log(`Developer Length square is:${s}`);
console.log("=======Question 2======");
var fe=function(){
    str="I am React Developer"; 
    var l=str.length;
    console.log("length of string:",l);
    var s=str.split(" ");
    var sl=s.length;
    console.log("total words:",sl);
    var divide=(l/sl);
    console.log(`String length/total words:${divide}`);
    var mul=(l*sl);
    console.log(`String length*total words:${mul}`);

}
fe();