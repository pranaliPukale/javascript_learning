let teacher={
name:'Proff.Patil',
subject:'C#',
degree:{
         engineering:'CSC',
         PHD:'Advanced Computing',
         diploma:'csc'
       },
certificate:{
              c1:'Hacker Rank Participation',
              c2:'Certificate in IFE Course',
              c3:'Certificate in Adv Programming',
            } ,
  con:function(){
   console.log(`Teacher total Degree:${teacher.degree.engineering} , ${teacher.degree.PHD} , ${teacher.degree.diploma}`); 

 }           

}
console.log("====concat string=====");
teacher.con();

console.log('===add new property===');
teacher.degree['experience']="12 year";
console.table(teacher.degree);
console.log('===after modify property===');
teacher.degree['experience']="13 year";
console.table(teacher.degree);
console.log("===add certificate===");
teacher.certificate['specialization']="C#";
console.table(teacher.certificate);
console.log("===deleting 1 certificate===");
delete teacher.certificate.c1;
console.table(teacher.certificate);