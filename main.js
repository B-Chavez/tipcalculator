let myDivTotalDue = document.getElementById("totalDue");
myDivTotalDue.innerHTML = "Banana!"
//Practicing to see what I can do to change values on elements




function clickButton(){
    let myTotalDos = document.getElementById("total").value;
    let myTips = document.getElementById("tips").value;
    //
    tipCalc(parseFloat(myTotalDos), parseFloat(myTips))
}

function tipCalc(total, percent){
    let myTip, myTotal = 0;
    myTip = total * (percent * .01);
    myTotal = total + parseFloat(myTip.toFixed(2));
    myDivTotalDue.innerHTML = "Your tip amount is " + myTip.toFixed(2) + ". Your toal due is " + myTotal.toFixed(2); 
}