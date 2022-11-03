console.log("======assignment 2======");
class Bank{
bank_name;
location;
acc_no;
rate;
constructor(bank_name,location,acc_no,rate)
 {
    this.bank_name=bank_name;
    this.location=location;
    this.acc_no=acc_no;
    this.rate=rate;
 }

}
var axis=new Bank('Axis Bank','Pandharpur',12345,0.2);
var sbi=new Bank("SBI Bank",'Solapur',23456,0.3);
var kotak=new Bank("Kotak Bank",'pune',345566,0.34);
var icic=new Bank("IcIC  Bank",'Mumbai',45678,0.23);
var hdfc=new Bank("HDFC Bank","Bangloar",76757,0.4);
var punjab=new Bank("PUNJAB Bank","Amritasar",67687,0.23);
var arr=[axis,sbi,kotak,icic,hdfc,punjab];
console.log("====Bank Name & location=====");
for(var a of arr){
    console.log(`Bank Name:${a.bank_name} , Location:${a.location} ` );
}
console.log('=======Kotak bank Detail=====');
for( var a of arr)
{
    if(a.bank_name=="Kotak Bank"){
    console.log(`${a.bank_name} location:${a.location} account number:${a.acc_no} rate:${a.rate}`);

    }
}
console.log("====All banks Details======");
for( var a of arr)
{
    console.log(`${a.bank_name} location:${a.location} account number:${a.acc_no} rate:${a.rate}`);
}

