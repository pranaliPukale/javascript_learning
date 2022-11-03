const fruits_seasonal=['Banana','Orange','apple','mango','water melon'];
console.log("array=",fruits_seasonal);
console.log('first element:',fruits_seasonal[0],'last element:',fruits_seasonal[fruits_seasonal.length-1]);
fruits_seasonal.splice(3,1);
console.log(" after Removing mango:");
console.log(fruits_seasonal);
fruits_seasonal.push('pineapple');
console.log('adding pineapple:');
console.log(fruits_seasonal);
fruits_seasonal.splice(3,0,'Dragon fruit');
console.log("adding dragon fruit 3rd index");
console.log(fruits_seasonal);
fruits_seasonal.splice(1,0,'kiwi');
console.log("after adding kiwi");
console.log(fruits_seasonal);
console.log("element from index 1 to 4:",fruits_seasonal.slice(1,4));
console.log("last 3 elements");
console.log(fruits_seasonal[fruits_seasonal.length-3],",",fruits_seasonal[fruits_seasonal.length-2],",",fruits_seasonal[fruits_seasonal.length-1]);

