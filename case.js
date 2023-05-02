

document.getElementById("case-button-increment").addEventListener("click",function(){
  
    let newInputNumber = updateNumber(true, "inputCaseNumber");
    
    updateTotalPrice(newInputNumber, "case-total");
    subTotal()
    
})

document.getElementById("case-button-decrement").addEventListener("click",function(){
    let newInputNumber = updateNumber(false, "inputCaseNumber");
    updateTotalPrice(newInputNumber, "case-total");
    subTotal()
})