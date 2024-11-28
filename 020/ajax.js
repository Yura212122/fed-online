let p2 = new Promise(function (resolve, reject) {
    resolve(4);
  });
  
  p2.then(function (value) {
    console.log(value); // 1
    return value + 3;
  }).then(function (value) {
    console.log(value);
    return value*3 // 2
  }).then(function(value){
console.log(value);
return value-10;
  }).then(function(value){
console.log(value);
  });
 
  function convertToUpperCase(str) {
    return new Promise((resolve, reject) => {
    
      if (typeof str !== 'string') {
        reject(new Error('Вхідний параметр не є рядком'));
      } else {
        setTimeout(() => {
           
          resolve(str.toUpperCase());
        }, 2000);  
      }
    });
  }
  
   
  convertToUpperCase('hello world')
    .then(result => {
      console.log('Перетворений рядок:', result); });

      function number (a,b){
        return new Promise((resolve,reject)=>{
if(a === b){
    reject(`equal`)
}
else{
    let ansewer = a>b? `${a} biger ${b}` : `${b} biger ${a}`;
    resolve(ansewer);
}
        });
      }
      number(4,4).then(ansewer=>console.log(ansewer)).catch(error=>console.log(error)
      );