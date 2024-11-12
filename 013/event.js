window.onload =  function(){
    let   [...button] = document.querySelectorAll(`p`);
    button.forEach(item=>{
        item.onclick = function(){
            console.log(this);
            this.style.color  = `red`;
        }
    });
    let boxx = document.getElementById(`idbox`);
    boxx.style.width = '100px';
    boxx.style.height = '100px';
    boxx.style.background = `red`;
    boxx.addEventListener(`dblclick`, function(){
        const currentWidth = boxx.offsetWidth;
        const currentHeight = boxx.offsetHeight;

        
        boxx.style.width = `${currentWidth * 2}px`;
        boxx.style.height = `${currentHeight * 2}px`;
     
    });
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementButton');

    let counterValue = 0;
 
    incrementButton.style.fontSize = '1.2em';
    incrementButton.style.padding = '10px 20px';
    incrementButton.style.backgroundColor = '#4CAF50';
    incrementButton.style.color = 'white';
    incrementButton.style.border = 'none';
    incrementButton.style.borderRadius = '5px';
    incrementButton.style.cursor = 'pointer';
    incrementButton.style.transition = 'background-color 0.3s';

 
    counterElement.style.fontSize = '2em';
    counterElement.style.margin = '20px';
    counterElement.style.color = '#333';

     
    function updateCounter() {
        counterElement.textContent = counterValue;
        if (counterValue > 10) {
          
            incrementButton.removeEventListener('click', incrementCounter);
            incrementButton.style.backgroundColor = '#ccc';  
            incrementButton.style.cursor = 'not-allowed';  
        }
    }
 
    function incrementCounter() {
        counterValue++;
        updateCounter();
    }
 
    incrementButton.addEventListener('click', incrementCounter);

     
    incrementButton.addEventListener('mouseover', function() {
        if (counterValue <= 10) {
            incrementButton.style.backgroundColor = '#45a049';
        }
    });

    incrementButton.addEventListener('mouseout', function() {
        if (counterValue <= 10) {
            incrementButton.style.backgroundColor = '#4CAF50';
        }
    });

   
    updateCounter();
    function createItems() {
        const container = document.getElementById('itemsContainer');
        container.innerHTML = '';  

        for (let i = 1; i <= 10; i++) {
            const item = document.createElement('div');
            item.classList.add('item');
            item.textContent = `Елемент ${i}`;
            
            
            item.onclick = function () {
                item.remove();  
            };
            
            container.appendChild(item);
        }
    }

    document.getElementById('createItemsBtn').onclick = createItems;
 
    const blockContainer = document.querySelector(`.blockcontainer`);
    blockContainer.addEventListener(`click`, function(event){
        if (event.target.classList.contains('button')){
            if(event.target.classList.contains(`first`)){
                alert(`first button`);
            }
            else if(event.target.classList.contains(`second`)){
                alert(`second button`);
            }
            else if(event.target.classList.contains(`third`)){
                alert(`third button`);
            }
        }
    });
}