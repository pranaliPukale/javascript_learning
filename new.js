console.log('============Question 1===============');
var evenodd=function(num){
    console.log(`Entered No is ${num}`);
    if(num%2==0)
    {
        console.log("Number is even");
    }else{
        console.log("Number is odd");
    }
}
evenodd(45);
evenodd(70);
evenodd(67);
evenodd(98);

console.log('============Question 2===============');
var vote=function(age){
    if(age>=18)
    {
        console.log(`you are eligible for voting ,your age is ${age}`);
    }
    else{
        console.log(`you are not eligible for voting ,your age is ${age}`);
    }
}
vote(18);
vote(20);
vote(17);
vote(40);
console.log('============Question 3===============');
var len=function(){
    var s="JavaScript-ES6";
    console.log(s);
    if(s.length>10)
    {
      console.log("String containing more than 10 char");
    }else{
        console.log("String not containing more than 10 char");
    }
}
len();

console.log('============Question 4===============');
var star=function(){
    var s1="JavaScript Language";
    if(s1.startsWith("Java"))
    {
        console.log(`${s1} starts with java`);
    }
}
star();