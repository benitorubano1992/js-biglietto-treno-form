


const inputAge=document.getElementById("age");
const inputKm=document.getElementById("numKm");
const submitBtn=document.getElementById("submit-btn");
const resultSpace=document.getElementById("result");
const kmEuro=0.21;
const youngAge=18;
const oldAge=65;
const youngScount=0.2;
const oldScount=0.4;
const clientName=prompt("Enter your name")
console.log(inputAge)
console.log(inputKm)
console.log(submitBtn)



//console.log(clientAge,typeof(clientAge)) debug

//console.log(numKm,typeof(numKm)); debug









submitBtn.addEventListener("click",function(){
resultSpace.innerHTML="";

const clientAge=parseInt(inputAge.value);    
const numKm=parseInt(inputKm.value);


let price=kmEuro*numKm;

let discount=0;


if(clientAge<youngAge){ //find the discount 
    discount=youngScount*price;
    
}
else if(clientAge>oldAge){
    discount=oldScount*price;
}
price-=discount;//update the price of the ticket
const finalPrice=price.toFixed(2);    
    
    
    
    
    
    
    
    
    
    
    
    //print of the result
    resultSpace.innerHTML+=`
    <h1>client name:${clientName}</h1>
    <p>client age:${clientAge}</p>
    <p>Km:${numKm}</p>
    <p> firstPrice: ${(price+=discount).toFixed(2)}&euro;</p>
    <p>discount: ${discount.toFixed(2)}&euro;</p>
    <p>final price:${finalPrice}&euro;</p>`;
    //after print the result clear the input
    inputAge.value="";
    inputKm.value="";
    
})






