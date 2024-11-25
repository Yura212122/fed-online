window.onload = function(){
    function showaleert(){
        alert(`Hello world`);
    }
    let time = setTimeout(showaleert, 3000);
    console.log(time);

    let counter = 0;
    let timer;

   
    const startButton = document.querySelector('.div');
    const counterDisplay = document.getElementById('counter');
 
    function startTimer() {
       
        if (timer) {
            clearInterval(timer);
        }
 
        timer = setInterval(() => {
            counter++;
            counterDisplay.textContent = counter;
 
            if (counter === 10) {
                clearInterval(timer);
                alert("Таймер зупинено!");
            }
        }, 1000);
    }
 
    startButton.addEventListener('click', startTimer);

    let changeBtn = document.getElementById('poor');
    changeBtn.onclick = function(){
        let root = document.documentElement;
        let curentBg = getComputedStyle(root).getPropertyValue('--bg-color');
        if(curentBg === 'black'){
            root.style.setProperty('--bg-color','red');
            root.style.setProperty('--text-color','white');
            root.style.setProperty('--title-color','yellow');
        }
        else{
            root.style.setProperty('--bg-color','brown');
            root.style.setProperty('--text-color','yellow');
            root.style.setProperty('--title-color','white');
        }
    }
}