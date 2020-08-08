function tipCalc(total, percent){
    let myTip, myTotal = 0;
    myTip = total * (percent * .01);
    myTotal = total + parseFloat(myTip.toFixed(2));
    return "Your tip amount is " + myTip.toFixed(2) + ". Your toal due is " + myTotal; 
}