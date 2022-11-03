console.log('====Assignment 1====');
var  bank_sbi={
    name:"SBI BANK",
    acc_no:123456789,
    ifsc_code:1234,
    interest_rate:0.2
}
console.log(bank_sbi);

var bank_location={
    street:'Goregaon,East',
    city:'Mumbai',
    pincode:411202
}
console.log(bank_location);
let sbi=Object.assign({},bank_sbi);
console.log('==========clone by Object.assign()with bank_sbi============');
console.log(`name:${sbi.name},account no:${sbi.acc_no},IFSC CODE:${sbi.ifsc_code},rate:${sbi.interest_rate} `);
let s1={...bank_sbi};
console.log("=======clone by spread operator with bank_sbi=====");
console.log(`=name:${s1.name},account no:${s1.acc_no},IFSC CODE:${s1.ifsc_code},rate:${s1.interest_rate}`);
let clone1_loc=Object.assign({},bank_location);
console.log('============clone by Object.assign()with bank_location==========');
console.log(`city:${clone1_loc.city},street:${clone1_loc.street},pincode:${clone1_loc.pincode}`);
console.log("===========clone by using spread operator=============");
let clone11_loc={...bank_location};
console.log(`city:${clone11_loc.city},street:${clone11_loc.street},pincode:${clone11_loc.pincode}`);
let rate_of_interest={
    home_loan:"0.5%",
    personal_loan:'0.55%',
    due_interest:"0.3%"
}
console.log(rate_of_interest);
let sbi_detail=Object.assign({},bank_sbi,bank_location,rate_of_interest);
console.log("====================SBI details======================");
console.log(`details are:${sbi_detail.name} ifsc code= ${sbi_detail.ifsc_code}acc no= ${sbi_detail.acc_no} rate ${sbi_detail.interest_rate}`);
console.log(`street=${sbi_detail.street} city=${sbi_detail.city} pin=${sbi_detail.pincode}`);
console.log(`home loan=${sbi_detail.home_loan} personal =${sbi_detail.personal_loan} due interest=${sbi_detail.due_interest}`);
console.log('================traverse=====================');
for(var element in sbi_detail){
    if(Object.hasOwnProperty.call(sbi_detail,element)){
        const key=sbi_detail[element];
        console.log(`${element}=${key}`);
    }
    console.log();
}


