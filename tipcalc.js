function tipcalculator(){
    let amount=document.getElementById("bill-amount").value;
    let perc=document.getElementById("tip-percentage").value;
    let tip=amount*(perc/100);
    let total=tip+Number(amount);
    document.getElementById("Tip-amount").value=tip;
    document.getElementById("Total-amount").value=total;
}