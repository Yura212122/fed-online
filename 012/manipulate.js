 window.onload = function(){
    function getRandomColor(){
const r = Math.floor(Math.random()*256);
const g = Math.floor(Math.random()*256);
const b = Math.floor(Math.random()*256);
return `rgb (${r},${g},${b})`;
    }
    function createdivs(){
       const container = document.createElement(`div`);
        container.style.display = `flex`;
        container.style.flexWrap = `wrap`;
        container.style.width = `900px`;
        container.style.margin = `0 auto`;
        for(i=0;i<50;i++){
            const div = document.createElement(`div`);
            div.style.width = `50px`;
            div.style.height = `50px`;
            div.style.borderRadius = `100%`;
            div.style.backgroundColor =  `red`;
           container.appendChild(div);
        }
         document.body.appendChild(container);
    } 
createdivs();
let [... divs] = document.querySelectorAll(`.containerel
    divel`);
    divs.forEach(div=>{
        div.classList.add(`circle-elemt`);
    })
}