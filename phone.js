document.getElementById("increment-button").addEventListener("click",function(){
  
    let newInputNumber = updateNumber(true, "inputNumber");
    
    updateTotalPrice(newInputNumber, "total-price");
    subTotal();
    
    
    
})

document.getElementById("decrement-button").addEventListener("click",function(){
    let newInputNumber = updateNumber(false, "inputNumber");
    updateTotalPrice(newInputNumber, "total-price");
    subTotal();
})