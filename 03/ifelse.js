let firstnumber = parseFloat(prompt(`перше число`));
let secondnumber = parseFloat(prompt(`друге число`));
let thirdnumber = parseFloat(prompt(`третє число`));
 
 if(firstnumber>secondnumber && firstnumber>thirdnumber){
     console.log (`firstnumber:найбільше`);
     
 }
 else if(secondnumber>  firstnumber && secondnumber> thirdnumber) {
    console.log  (`secondnumber:найбільше`);
   
 }
 else   {
     console.log (` thirdnumber:найбільше`);
   
 }
 