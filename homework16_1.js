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
console.log('<====Employee name who working in TCS======> ');
for(a of arr)
{
    if(a.emp_company=="TCS")
    {
        console.log(`Employee Name:${a.emp_name}  Company:${a.emp_company}`);
    }
}
console.log("<===Employee who are working in Finance department====> ");
for(a of arr)
{
    if(a.emp_dept=="Finance")
    {
        console.log(`Employee name:${a.emp_name}  Department:${a.emp_dept}`);
    }
}
console.log("<=== Employee name starts with R====>");
for(a of arr)
{
    if(a.emp_name.startsWith('R'))
    {
        console.log(`Name:${a.emp_name},Id:${a.emp_id},Department:${a.emp_dept},Salary:${a.emp_sal},Company:${a.emp_company}`);

    }
}
console.log("<====Employee who have  salary>70000====>");
for(a of arr)
{
    if(a.emp_sal>70000)
    {
        console.log(`Name::${a.emp_name}  salary:${a.emp_sal} company:${a.emp_company}`);
    }
}
console.log("<===Employee salary>=50000 &  department = IT");
for (a of arr)
{
    if(a.emp_sal>=50000 && a.emp_dept=="IT")
    {
        console.log(`Name:${a.emp_name} salary:${a.emp_sal} id:${a.emp_id} department:${a.emp_dept} company:${a.emp_company}`);
    }
}
console.log('<====Employee from INFY====>');
for(a of arr)
{
    if(a.emp_company=="INFY")
    {
        console.log(`Name:${a.emp_name} salary:${a.emp_sal} id:${a.emp_id} department:${a.emp_dept} company:${a.emp_company}`);
    }
}