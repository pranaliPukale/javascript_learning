var gradeSystem=function(marks){
    var td=typeof(marks);
   // console.log(td);
    if( marks<0 || marks>100)
    {
        console.log(`Score=${marks} : You enter invalid input`);
    }else if(marks<35)
    {
        console.log(`Score=${marks} : You are failed`);
    }
    else if(marks>=35 && marks<60)
    {
        console.log(`Score=${marks}:You are passed with 'Grade C'`);
    }else if(marks>=60 && marks<75)
    {
        console.log(`Score=${marks}:You are passed with 'Grade B'`);
    }else if(marks>=75 && marks<90 )
    {
        console.log(`Score=${marks}:You are passed with 'Grade A'`);
    }else if(marks>=90 && marks<=100)
    {
        console.log(`Score=${marks}:You are passed with 'Grade A++'`);
    } else if(td=='string' || td=='undefined' ||td=='null')
    {
        console.log(`score=${marks} you enter INVALID input `);
    }
}
gradeSystem(66);
gradeSystem(13);
gradeSystem("");
gradeSystem(98);
gradeSystem("Fifty five");
gradeSystem(35);
gradeSystem(75);
gradeSystem(null);
gradeSystem(undefined);
gradeSystem(-20);
gradeSystem(55);
gradeSystem(82);






