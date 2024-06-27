var exchangeForm = document.querySelector(".exchangeForm");
exchangeForm.onsubmit= function(e){
var ammount=``;
    e.preventDefault();
var elements = e.target.elements;
ammount=elements[0].value;
if(elements[1].value=="dollar"){
    document.querySelector("p").textContent= ammount/3.5+` $` ;

}
else if(elements[1].value=="dinar"){
    document.querySelector("p").textContent=ammount/5+` JOD`;
}
else{
    document.querySelector("p").textContent=ammount+` nis`;
}
}
