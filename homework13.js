console.log("====shallow clone=====");
var array_nums=[20,3,4,56,90,400,49];
var num1=array_nums;
num1.push(55);
num1.push(66);
console.log(`Original Array:${array_nums}`);
console.log(`After add new element:${num1}`);
console.log("===Deep clone=====");
var array_nums=[20,3,4,56,90,400,49];
var num2=[...array_nums];
num2.push(10);
num2.push(25);
console.log(`Original Array:${array_nums}`);
console.log(`After add new element:${num2}`);
console.log("===Merge array===");
var array_nums=[20,3,4,56,90,400,49];
var Merge=[...array_nums,...array_even];
console.log(`Merge array:${Merge}`);
console.log("=========employee info============");
const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:'40,0000INR',
        aug_month:'65,0000INR',
        june_month:'45,0000INR',
          },
        address:{
           locality:{
                    colony:"Om Vrindavan Society",
                    street:"Kanch pokali,431202"
                    } ,
        city:'mumbai',
        state:'Maharashtra',
        country:'India',

       },
       mobile_no:["+91 8600 3456 88","1800 4567 32","+91 9096 5678 77"],
}
console.log(employee_info);
console.log("===Question 5=====");
console.log("employee address:");
console.log( employee_info.address.locality,employee_info.address);
console.log("Mobile address:",employee_info.mobile_no);
console.log("===== ...operator=====");
var emp1={...employee_info};
emp1.address.locality.street='Khavu galli,431202';
//console.log(emp1.address.locality.street);
emp1.mobile_no[0]='9987 6655 33';
//console.log(employee_info.mobile_no);
console.log(" street name original Object",employee_info.address.locality.street);
console.log("mobile number original object",employee_info.mobile_no);
console.log(" street name cloned Object",emp1.address.locality.street);
console.log("mobile number cloned object",emp1.mobile_no);
console.log('====JSON.parse()====');
var emp2=JSON.parse(JSON.stringify(employee_info));
emp2.salary.july_month="80,0000INR";
emp2.address.country="United Kingdom";
console.log("salary in original object:",employee_info.salary.july_month);
console.log("country in original object:",employee_info.address.country);
console.log("salary in cloned object:",emp2.salary.july_month);
console.log("country in cloned object:",emp2.address.country);
 
