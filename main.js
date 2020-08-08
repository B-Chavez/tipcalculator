let myDivTotalDue = document.getElementById("totalDue");
myDivTotalDue.innerHTML = "Banana!"





function clickButton(){
    let myTotalDos = document.getElementById("total");
    let myTips = document.getElementById("tips");

    tipCalc(myTotalDos.nodeValue, myTips.nodeValue)
}

function tipCalc(total, percent){
    let myTip, myTotal = 0;
    myTip = total * (percent * .01);
    myTotal = total + parseFloat(myTip.toFixed(2));
    myDivTotalDue.innerHTML = "Your tip amount is " + myTip.toFixed(2) + ". Your toal due is " + myTotal; 
}