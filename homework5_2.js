console.log("=======Assignment 2=======");
console.log("=======Question 1========");
 var check1=function(n1,n2){
    var result=(n1>n2)?n1:n2;
    console.log(`Greater number is:${result}`);
 }
 check1(10,-10);
 check1(800,899);
 console.log("=======Question 2========");
 var check2=function(num){
    var res=(num%2==0)?true:false;
    return res;
 }
 var c1=check2(29);
 console.log(`Result for 29:${c1} `);
 var c1=check2(44);
 console.log(`Result for 44:${c1} `);
 var c1=check2(0);
 console.log(`Result for 0:${c1} `);
 var c1=check2(101);
 console.log(`Result for 101:${c1} `);
 console.log("=======Question 3========");
 var check3=function(s1){
  var l=s1.length;
  var r1=(l%2==0)?"EVEN":"ODD";
  return r1;
 }
 var c2=check3("JavaScript");
 console.log(`length of string of javascript is even?:${c2}`);
 var c2=check3("Google");
 console.log(`length of string of Google is even?:${c2}`);
 var c2=check3("Developer");
 console.log(`length of string of Developer is even?:${c2}`);