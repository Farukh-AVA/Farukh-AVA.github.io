"use strict";

/*
   <!--
    New Perspectives on HTML5 and CSS3, 7th Edition
    Term Progect 
    
    
    K&G Van Express Inc 
    Author: Farukh Khassan Khojayev
    Date:   06/04/2021

    
   -->
   
*/

window.addEventListener("load",
   function(){
      var orderForm = document.forms.orderForm;

      orderForm.elements.orderDate.value = new Date().toDateString();

    

      var selectedItems = orderForm.elements.model;
      //console.log(selectedItems);
         for(var i=0; i<selectedItems.length; i++){
         selectedItems[i].onclick = calcOrder;
      }

});

function calcOrder(){

   var orderForm = document.forms.orderForm;

   //Calculate the initial cost
  
   var mIndex = orderForm.elements.model.selectedIndex;
   var mCost = orderForm.elements.model.options[mIndex].value;




   //Calculate the subtotal
   orderForm.elements.subtotal.value = formatNumber((mCost),2);

   //Calculate a sale tax
   orderForm.elements.salesTax.value = formatNumber((mCost)*0.08,2);

   // Calculate the total 
   var total = (mCost*1)+(mCost)*0.08;
   orderForm.elements.totalCost.value = formatUSCurrency(total);


   


}


function formatNumber(val, decimals){

   return val.toLocaleString(undefined,{
      minimumFractionDigits:decimals,
      maximumFractionDigits:decimals
   });
}


function formatUSCurrency(val,){
   return val.toLocaleString('en-US',{
      style:"currency", currency:"USD"
   });
}



