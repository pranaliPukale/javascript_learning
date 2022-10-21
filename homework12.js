console.log("===Question 1=====");
class vehicle{
  name;
  year;
  constructor(name,year){
                         this.name=name;
                         this.year=year;

                        }  
 play(){
     
     console.log(`Name:${this.name} , Year:${this.year}`);
 }
}
let a= new vehicle("Honda",2000);
a.play();
let b= new vehicle("Suzuki",2005);
b.play();
let c= new vehicle("Platina",2002);
c.play();
let d= new vehicle("Jupiter",2003);
d.play();
let e= new vehicle("shine",1999);
e.play();
console.log("===Question 2=====");
class college{
    name;
    placement;
    constructor(name,placement){
        this.name=name;
        this.placement=placement;
         }
    observe() {
        console.log(`College name=${this.name} Number of student placed=${this.placement}`);
    } 
    
  }
 
let p=new college("Sangola college sangola",70);
p.observe();
let q=new college("Fabtech",60);
q.observe();
let r=new college("Vidnyan Mahavidyaly sangola",40);
r.observe();
let s=new college("Sveri",80);
s.observe();

