 console.log(window);
 console.log(document);

 window.onload = function(){
    let idelement = document.getElementById(`head`);
    console.log(idelement);
let classelement = document.getElementsByClassName(`sec`);
console.log(classelement);
let tagelement = document.getElementsByTagName(`div`);
console.log(tagelement);
let queryelement = document.querySelector(`ul li:first-child`);
console.log(queryelement);
let queryelementfirst = document.querySelector(`ul li:nth-child(2)`);
console.log(queryelementfirst);
let queryelementsecond = document.querySelector(`ul li:last-child`);
console.log(queryelementsecond);
 let querryall = document.querySelectorAll(`ul li`);
 console.log(querryall);
 let arrElements = Array.from(querryall);
 console.log(arrElements);
 }