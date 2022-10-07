const inputName=document.getElementById("username");
const inputKm=document.getElementById("numeroKm");
const inputAge=document.getElementById("userAge");
//console.log(inputName.value,typeof(inputName.value))
//console.log(inputKm.value,typeof(inputKm.value))
//console.log(inputAge.value,typeof(inputAge.value))
const kmEuro=0.21;
const youngAge=18;
const oldAge=65;
const youngScount=0.2;
const oldScount=0.4;
const submitBtn=document.getElementById("submit-btn");
const resetBtn=document.getElementById("reset-btn");
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


submitBtn.addEventListener('click',function(){
const numKm=parseInt(inputKm.value);
let price=kmEuro*numKm;
let discount=0;
let result="biglietto normale"
if(inputAge.value==="minorenne"){
    discount=youngScount*price;
    result='biglietto scontato';
}
else if(inputAge==='anziano'){
    discount=oldScount*price;
    result='biglietto scontato'
}
price-=discount;//update the price of the ticket
const finalPrice=price.toFixed(2);    

document.getElementById('name-client').textContent=inputName.value;
document.getElementById('ticket-type').textContent=result;
document.getElementById('code-ticket').textContent=getRndInteger(1,10000);
document.getElementById(`price-ticket`).textContent=finalPrice;


})

resetBtn.addEventListener('click',function(){
document.getElementById('name-client').textContent="";
document.getElementById('ticket-type').textContent="biglietto normale";
document.getElementById('code-ticket').textContent="";
document.getElementById(`price-ticket`).textContent="";
inputName.value=""
inputAge.value=""
inputKm.value=""

 


})