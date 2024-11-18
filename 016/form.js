function changebg(color){
   document.body.style.backgroundColor = color
}
 window.onload = function(){
   let resultBtn = document.querySelector('.showResult');
   let resutltBox = document.querySelector('.resultBox');
   let [...checkboxes] = document.querySelectorAll('input[name="hobby"]');
   // let [...checkboxes] = document.querySelectorAll('input[name="Transport"]:checked');
   let checkedValues = [];
   resultBtn.onclick = function(){
       resutltBox.innerHTML ="";
       checkedValues = [];
       checkboxes.forEach(item=>{
           if(item.checked){
               checkedValues.push(item.value);
           }
       });
       checkedValues.forEach(item=>{
           let pEl = document.createElement('p');
           pEl.innerText = item;
           resutltBox.appendChild(pEl);
       });
   }
   let selectel = document.querySelector(`#country`);
   let resulcounl = document.querySelector(`.resultcou`);
selectel.addEventListener(`change`, function(){
 resulcounl.innerText = this.value;
});
let  radioButtons = document.querySelectorAll('input[name="rating"]');
let resultrat = document.getElementById(`result`);
radioButtons.forEach(radio=>{
radio.addEventListener(`change`, function(){
let  value = this.value;
resultrat.textContent = `ви вибрали оцінку : ${value}`;
alert(`ви вибрали оцінку : ${value}`)
});
});
}