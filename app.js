// function for update case number 
function updateCaseNumber(product,price,isIncreasing){
    const caseInput=document.getElementById(product+'-number');
    let caseNumber=caseInput.value;

    if(isIncreasing==true){
        caseNumber=parseInt(caseNumber)+1;
    }
    else if(caseNumber>0){
        caseNumber=parseInt(caseNumber)-1;
    }
    caseInput.value=caseNumber;
// update case total 
const caseTotal=document.getElementById(product+'-total');
caseTotal.innerText=price*caseNumber;
calculateTotal();
}

// function to get input value 
function getInputValue(product){
const productInput=document.getElementById(product+'-number');
const productNumber=parseInt(productInput.value);
return productNumber;
}

// function to calculate sub total 
function calculateTotal(){
const phoneTotal=getInputValue('phone')*1220;
const caseTotal=getInputValue('case')*60;

const subTotal=phoneTotal+caseTotal;
const tax=subTotal/8;
const totalPrice=subTotal+tax;
// update the value 
document.getElementById('sub-total').innerText=subTotal;
document.getElementById('tax-total').innerText=tax;
document.getElementById('total-price').innerText=totalPrice;
}

// to but phonne case cover
// for click plus sign case
document.getElementById('case-plus').addEventListener('click',function(){
    updateCaseNumber('case',60,true);
   /*  
   const caseInput=document.getElementById('case-number');
    const caseNumber=caseInput.value;
    caseInput.value=parseInt(caseNumber)+1; 
    */
});

// for clicking minus sign case
document.getElementById('case-minus').addEventListener('click',function(){
    updateCaseNumber('case',60,false);
/* 
const caseInput=document.getElementById('case-number');
const caseNumber=caseInput.value;
caseInput.value=parseInt(caseNumber)-1; 
*/
});

// click plus sign phone 
document.getElementById('phone-plus').addEventListener('click',function(){
    // console.log('plus sign clicked in phone');
    updateCaseNumber('phone',1200,true);
});
// click minus sign phone 
document.getElementById('phone-minus').addEventListener('click',function(){
    // console.log('minus sign clicked in phone');
    updateCaseNumber('phone',1220,false);
})