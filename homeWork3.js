console.log("======Question 1=======");//Question 1
var sqr=function(a)
{
    console.log("square of:"+a,a*a);
}
sqr(5);
sqr(6);
sqr(25);
sqr(100);

console.log("======Question 2=======");//Question 2
var a=function(){
    console.log("hi");
}
console.log(typeof a);

console.log("======Question 3=======");//Question 3
var tri=function(h,b){
    console.log("Area of triangle:",(0.5*h*b));
}
tri(5,10)
console.log("======Question 4=======");//Question 4
var rect=function(l,b){
    console.log("Area of rectangle:",(l*b));
}
rect(8,2)
console.log("======Question 5=======");//Question 5
var s=function(a,b){
    console.log("Before Swapping:",a,b);
    var c;
    c=a,a=b,b=c;
    console.log("After Swapping:",a,b);
}
s("Virat","Anushka");
s(1000,2000);
console.log("======Question 6=======");//Question 6
var a=function(){
var s="JavaScript thee most popular language";
console.log("total character :",s.length);
var c=s.indexOf('S')
console.log("index of S:",c);
var c=s.indexOf('lang')
console.log("index of lang:",c);
var d=s.length-1;
console.log("last character:",s.charAt(d));
var d=s.length-3;
console.log("-3rd character:",s.charAt(d));


}
a()