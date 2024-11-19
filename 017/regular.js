window.onload = function(){
    let text =  (/[A-Z]/g);
    let textStr = `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Eos itaque vero laborum fugit harum! Quia, 
    cumque necessitatibus nemo veniam odit dolor 
    impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!`;
    
let answer = textStr.match(text);
console.log(answer);
let digihtal = (`5 плюс 7 = 3`);
let digitalel =digihtal.match(/\d+/g);
console.log(digitalel);
let textel = textStr.match(/[a-zA-Z]{5}/g);
console.log(textel);
}