function updateNumber(isIncrease, id){
    let inputField = document.getElementById(id);
    let inputNumberTextValue = inputField.value;
    let inputNumber = parseInt(inputNumberTextValue);
    let newInputNumber;
    if (isIncrease) {
        newInputNumber = inputNumber + 1;
    }else {
        newInputNumber = inputNumber - 1;
    }
    inputField.value = newInputNumber;
    return newInputNumber;
}

function updateTotalPrice(newInputNumber, priceId){
    let getTotalPrice;
    if (priceId == "total-price") {
        getTotalPrice = newInputNumber * 1219;
    }else{
        getTotalPrice = newInputNumber * 59;
    }
    
    let totalPrice = document.getElementById(priceId);
    totalPrice.innerText = getTotalPrice;
}
function getId(priceId){
    const phoneTotal = document.getElementById(priceId);
    const phoneTotalString = phoneTotal.innerText;
    const phoneTotalPrice = parseInt(phoneTotalString);
    return phoneTotalPrice;
}
function subTotal(){
    let totalPhonePrice = getId("total-price");
    let totalCasePrice = getId("case-total");
    let totalSubTotal = totalPhonePrice + totalCasePrice; 
    let subTotal = document.getElementById("sub-total");
    subTotal.innerText = totalSubTotal;
    let tax = (totalSubTotal * 0.1).toFixed(2);
    let taxAmount = parseFloat(tax);
    let taxElement = document.getElementById("tax");
    taxElement.innerText = taxAmount;
    let grandTotal = taxAmount + totalSubTotal;
    document.getElementById("total").innerText = grandTotal;
}