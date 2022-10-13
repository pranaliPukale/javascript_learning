console.log('============Question 1===============');
var maleMarriageEligibility=function(gender,age,name){
    var result=(age>=21 && (gender=='Male'))?
    (console.log(` Hey ${name} you are eligible for marriage,your age is:${age}`)):
    (console.log(` Hey ${name} you are not eligible for marriage,your age is:${age}`))
    }
    maleMarriageEligibility("Male",25,"Billgates");
    maleMarriageEligibility("Male",17,"Stew Jobes");

    console.log('============Question 2===============');
    var femaleMarriageEligibility=function(gender,age,name)
    {
        if(age>=18 && gender=='female')
        {
            console.log(`Hey ${name} you are eligible for marriage ,your age is:${age}`);
        }
        else{
            console.log(`Hey ${name} you are not eligible for marriage,your age is:${age},`);
        }
    }
    femaleMarriageEligibility('female',16,'Jenifer');
    femaleMarriageEligibility('female',27,'Malinda Gates')