const arr=[1,-7,40,502,-77,91,0,108,89,-601];
console.log("=========element & index=======");
var a1=arr.forEach((value,index)=>{console.log(value,"  ",index);});
console.log("=====Positive number=======");
var a1=arr.forEach((value)=>{
    if(value>=0)
    {
        console.log(value);
    }
});
console.log("=====Negative number=======");
var a1=arr.forEach((value)=>{
    if(value<0)
    {
        console.log(value);
    }
});
console.log("=====Even number=======");
var a1=arr.forEach((value)=>{
    if(value%2==0)
    {
        console.log(value);
    }
});
console.log("=========sum of all element=======");
var c=0;
var a1=arr.forEach((value)=>{
  c=c+value;
});
console.log(c);
console.log("=====Even position=======");
var a1=arr.forEach((value,index)=>{
    if(index%2==0)
    {
        console.log(value);
    }
});
console.log("=====odd position & negative=======");
var a1=arr.forEach((value,index)=>{
    if(index%2==1 && value<0)
    {
        console.log(value);
    }
});