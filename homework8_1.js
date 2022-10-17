console.log('=====Assignment 1========');
console.log("======Question 1======");
var vow=function(){
    var s1='I Love JavaScript';
    var s2=s1.toLocaleLowerCase();
    var a=s2.length-1;
    
    //console.log(a);
    var c=0;
    for(i=0;i<=a;i++){
       var char=s2.charAt(i);
       if(char=='e' || char=='a'||char=='i'||char=='o'||char=='u')
       {
       // console.log(char);
        c++;
       }

    }
    console.log(`Total Vowels in 'I love JavaScript':${c}`);
}
vow();
console.log("======Question 2======");
var add=function(){
    var c=0;
  for(i=1;i<10;i=i+1){
    c=c+i;
  }
  console.log(`Sum of 1 to 10:${c}`);
}
add();
console.log("======Question 3======");
var add=function(){
    var c=0;
  for(i=1;i<=5;i=i+1){
    c=c+(i*i);
  }
  console.log(`Sum of square of 1 to 5:${c}`);
}
add();
console.log("======Question 4======");
var evenPositionedChars=function(s1){
    console.log(s1);
    var s2=s1.toLocaleLowerCase();
    var a=s2.length-1;
    
    //console.log(a);
    var c=0;
    for(i=0;i<=a;i++){
       
      if((i%2==0)   )
       {
        var e=s2.charAt(i);
        //console.log(e);
        c++;
       }

    }
  console.log('even position:',c); 
}
evenPositionedChars("Hard Work always play back");
evenPositionedChars("Soon I will be React IT champ");
console.log("======Question 5======");
var oddPositionedChars=function(s1){
    console.log(s1);
  var s2=s1.toLocaleLowerCase();
  var a=s2.length-1;
  
  //console.log(a);
  var c=0;
  for(i=0;i<=a;i++){
     
    if((i%2==1)   )
     {
      var e=s2.charAt(i);
      //console.log(e);
      c++;
     }

  }
  console.log('odd position:',c); 
}
oddPositionedChars("Hard Work always play back");
oddPositionedChars("Soon I will be React IT champ");
console.log("======Question 6======");
var vow=function(){
    var s1='Good Morning IT Champ';

    console.log(s1);
    var s2=s1.toLocaleLowerCase();
    var li='aeiou';
    var a=s2.length-1;
    var c=0;
    for(i=0;i<a;i++){
      if(li.indexOf(s2[i])!== -1)
      {
        
        c++;
      }
    }
  
    console.log('total  vowel count',c);
  }
    vow();
console.log("====Assignment 2====");
    console.log("======Question 1======"); 
    var reverseString=function(s2){
      console.log(s2);
    var c="";
    var a=s2.length;
    for(i=a;i>=0;i--){
       var char=s2.charAt(i);
       c=c+char;
      
    }
    console.log('Reverse string:');
    console.log(c);

    }
    reverseString("Hard Work always play back");
    reverseString("Soon I will be React IT champ");
