const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log("Array is",array_numbers);
console.log("length of array:",array_numbers.length);
console.log(`first element:${array_numbers[0]}  last element:${array_numbers[10]}`);
console.log('third last element is', array_numbers[array_numbers.length-3]);
console.log("even number:");
var c='';
for( var a of array_numbers)
{
    if(a%2==0){
       console.log(a);
       
    }

}

console.log("odd number:");
for( var a of array_numbers)
{
    if(a%2==1){
        console.log(a);
    }
    
}
console.log('even positioned element');
for(i=0;i<array_numbers.length;i++)
{
 if(i%2==0)
   {
    console.log(array_numbers[i]);
   }
}
console.log('odd positioned element');
for(i=0;i<array_numbers.length;i++)
{
 if(i%2==1)
   {
    console.log(array_numbers[i]);
   }
}

var c=0;
for(var a of array_numbers)
{
 c=c+a;
}
console.log('sum of all element:',c);
console.log("Number divisible by 5:");
for(a of array_numbers)
{
    if(a%5==0)
    {
        console.log(a);
    }
}
var b=0;
var is_available=array_numbers.includes(115);
console.log("115 present in given array?:",is_available);
var is_available=array_numbers.includes(23);
console.log("23 present in given array?:",is_available);

