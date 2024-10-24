let number = prompt(`ввудіть чиссло від 0 до  100`);

 
 console.log(+number+1)

if(number>89 && number<101){
    console.log(`A`);
}
else if(number> 79 && number<90){
    console.log(`B`);
}
else if(number> 69 && number<80){
    console.log(`C`);
}else if(number> 59 && number<70){
    console.log(`D`);
}
else if( number<60){
    console.log(`F`);
}