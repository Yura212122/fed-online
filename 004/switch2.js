   
   let start = 1; 
   let end = 20;  
   let sum = 0;    
   
   let current = start;
   
   while (current <= end) {
       if (current % 2 === 0) { 
           sum += current;      
       }
       current++;  
   }
   
   console.log(`Сума всіх парних чисел від ${start} до ${end} дорівнює ${sum}`);
 