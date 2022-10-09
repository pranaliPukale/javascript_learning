console.log("====Assignment 1======");
//Question1
function Hi(){
console.log("hi....");
}
Hi()
function hello() {
   console.log("hello..."); 
}
hello()

//Question2
function list(fName,lName,contact){
console.log(fName,lName,contact);
}   
list("Pranali","Pukale",123) 

//Question3
function swap(a,b){
    var c;
    console.log("Before Swapping:"+a,b);
    c=a,a=b,b=c;
    console.log("After Swapping:"+ a,b);
}
swap("Virat","Anushka")
swap(1000,2000)

//Question4
function add(a,b,c)
{
    var d;
    d=a+b+c;
    return d;
}
var x=add(10.23,600,40)
console.log('addition:',x);
var y=add("hello","Good","Morning")
console.log('addition:',y);


