let msg=() => {console.log(`Good Morning ! Today is Friday.`);}
msg();
console.log("======multiplication========");
let mul=(a,b,c=1) =>{console.log(`Multiplication of ${a},${b},${c} is ${a*b*c}`);}
mul(5,5,2);
mul(10,4);
console.log("=====addition=======");
let add=(a,b,c,d,e)=>{console.log(`Addition of ${a},${b},${c},${d},${e} is ==${a+b+c+d+e}`);}
add(100,100,200,349,756);
add("I am","learning",'ES6',"feature",'in depth');