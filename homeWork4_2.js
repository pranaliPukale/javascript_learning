console.log("=======Assignment 2========");
var stringHandsOn=function(){
var str="   Hey you are doing good,keep it up    "
console.log("Original string:",str);
console.log("Length of string :",str.length);
var s=str.trim();
console.log("Removing extra spaces:",s);
var e=(str.length)-(s.length);
console.log("Total extra spaces:",e);

var w=s.split(" ");
console.log("Total word:",w);
console.log(`Index of 'good':`,s.indexOf('good'));
console.log("Substring by using substring():",s.substring(22));
console.log("Substring by using slice():",s.slice(22));
console.log(`Is string ends with 'up'?:`,s.endsWith('up'));
console.log(`Is string starts with 'Hey'?:`,s.startsWith('Hey'));
}
stringHandsOn()