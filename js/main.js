let loanAmount = document.getElementById("loanAmount");
let interest = document.getElementById("interest");
let monthNumber = document.getElementById("monthNumber");


function calculateLoan(){
    
    if(validationInput()){
        let realInterest = interest.value / 1200;
    let realAmount = loanAmount.value;
    let realMonth = monthNumber.value;
    let monthlyPayment = (realAmount * realInterest *(Math.pow(1 + realInterest , realMonth))) / (Math.pow(1 + realInterest , realMonth) -1);
    let monthlyPaymentDom = document.getElementById("monthlypaymentdom");
    let totalPayment = monthlyPayment * realMonth;
    let totalPaymentDom =document.getElementById("totalPayment");
    let totalInterest = totalPayment - realAmount;
    let totalInterestDom = document.getElementById("totalInterest");

    monthlyPaymentDom.innerHTML = monthlyPayment.toFixed(2);
    totalPaymentDom.innerHTML = totalPayment.toFixed(2);
    totalInterestDom.innerHTML = totalInterest.toFixed(2);

    let resultDiv = document.getElementById("resultDiv");
    resultDiv.style.display = "block";
    clearInput();
    }
    else{
        alert("Wrong input data");
    }
    


}

function validationInput(){
    if(loanAmount.value != "" && interest.value !="" && monthNumber.value != ""){
        return true;
    }
    else{
        return false;
    }
}

function clearInput(){
    loanAmount.value = "";
    interest.value ="";
    monthNumber.value = "";
}