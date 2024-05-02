document.addEventListener("DOMContentLoaded", ()=>{
    
    function updateDisplay(){
        if(cupElement.checked){
            toppings.classList.remove("hidden")
        }else{
            toppings.classList.add("hidden")
        }
    }
    coneElement.onclick = updateDisplay;
    cupElement.onclick = updateDisplay;

    submitOrder.addEventListener("click", ()=>{
        
        //GET AND CONVERT ELEMENT VALUES TO LOCAL JS VARIABLES
        const scoops = Number(scoopsElement.value) 
        const cone = coneElement.checked;  // NOTE CHECKED NOT VALUE
        const cup = cupElement.checked; //EVEEN THOUGH ITS A RADIO

        const sprinkes = sprinklesElement.ckecked;
        const whipped = sprinklesElement.ckecked;
        const fudge = hotFudgeElement.ckecked;
        const cherry = cherryElement.ckecked
        
        // LOVAL JAVASCRIPT OUTPUT VARIABLES
        let basePrice = 0;
        let tax = 0; 
        let total = 0;

        //START LOGIC
        basePrice = 2.25 ;
        if(scoops > 1){
            basePrice += 1.25 * (scoop - 1);
        }
        if(cup){
            if(sprinkes){
                basePrice += 0.50
            }
            if(whipped){
                basePrice += 0.25
            }
            if(fudge){
                basePrice += 1.25
            }
            if(cherry){
                basePrice += 0.25
            }
        }
        tax = basePrice * 0.08
        total= basePrice + tax

        //UPDATE DISPLAY
        basePriceElement.innerText = "$" + basePrice.toFixed(2);
        taxElement.innerText = "$" + tax.toFixed(2);
        totalElement.innerText = "$" + total.toFixed(2);


    });//end click

}); //end content loaded
