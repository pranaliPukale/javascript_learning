class Employee{
    constructor(emp_id,  emp_name,emp_dept,emp_sal,emp_company){
    
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_sal=emp_sal;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radhika=new Employee(33,"Radhika","HR",74000,"WIPRO");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",47000,"INFY");
const emp_monica=new Employee(77,"Monica","IT",40000,"WIPRO");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"INFY");
let arr=[emp_anil,emp_radhika,emp_rishi,emp_sonali,emp_monica,emp_viny,emp_mahi];
console.log("============TCS employee=========");
var a1=arr.forEach((e)=>{
  if(e.emp_company=="TCS")
  {
    console.log(`Name:${e.emp_name},ID:${e.emp_id},Department:${e.emp_dept},Salary:${e.emp_sal},Company:${e.emp_company}`);
  }
});
console.log("=======Salary>=50000=========");
var a1=arr.forEach((e)=>{
    if(e.emp_sal>=50000)
    {
      console.log(`Name:${e.emp_name},ID:${e.emp_id},Department:${e.emp_dept},Salary:${e.emp_sal},Company:${e.emp_company}`);
    }
  });
  console.log("========sum of salary======");
  var c=0;
  var b=arr.forEach((value)=>{
    if(value.emp_sal>0)
    {
        c=c+(value.emp_sal);
    }
  });
  console.log(c);
  console.log("========avg of salary======");
  var c=0;
  var b=arr.forEach((value)=>{
    if(value.emp_sal>0)
    {
        c=c+(value.emp_sal);
    }
  });
  console.log(c/(arr.length));
console.log("=====IT & HR department salary>75000");
var a=arr.forEach((e)=>{
    if((e.emp_dept=='HR' || e.emp_dept=='IT')&&(e.emp_sal>=75000))
    {
        console.log(`Name:${e.emp_name},ID:${e.emp_id},Department:${e.emp_dept},Salary:${e.emp_sal},Company:${e.emp_company}`);
    
    }
});
console.log("==============map=========");
var map=new Map();
map.set(22,emp_anil);
map.set(33,emp_radhika);
map.set(55,emp_rishi);
map.set(66,emp_sonali);
map.set(77,emp_monica);
map.set(88,emp_viny);
map.set(99,emp_mahi);
console.log(map);
var b=map.forEach((value)=>{
    console.log(`${value.emp_id}==>Name:${value.emp_name} dept:${value.emp_dept} company:${value.emp_company} salary:${value.emp_sal}`);
})
