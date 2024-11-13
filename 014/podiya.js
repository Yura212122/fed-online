window.onload = function(){
let gameel = document.querySelector(`.game`);
let scuareel = document.querySelector(`.scuare`);
let posY = 0;
let posX = 0;
document.addEventListener(`keydown`, function(e){
    switch(e.key){
        case `ArrowUp`:
            posY = Math.max(0, posY -5);
            break;
            case `ArrowDown`:
                posY = Math.min(gameel.clientHeight - scuareel.clientHeight, posY +5 );
                break;
                case `ArrowLeft`:
                    posX = Math.max(0, posX -5);
                    break;
                    case `ArrowRight`:
                        posX = Math.min(gameel.clientWidth - scuareel.clientWidth, posX +5 );
                        break;

    }
    scuareel.style.top = `${posY}px`;
    scuareel.style.left = `${posX}px`;
    
});
let mouseel = document.querySelector(`.mouse`);
mouseel.addEventListener(`mouseover`, function(e){
this.innerText = e.type;
mouseel.style.background = `green`;
});
mouseel.addEventListener(`mouseout`, function(e){
    this.innerText = e.type;
    mouseel.style.background = `white`;
    });
    let menuel = document.querySelector(`.menu`);
    document.querySelector(`.text`).addEventListener(`contextmenu`, function(e){
        e.preventDefault();
        menuel.style.top = `${e.clientY}px`;
        menuel.style.left = `${e.clientX}px`;
        menuel.style.display = `block`;
    });
    document.addEventListener(`click`, function(){
menuel.style.display = `none`;
    });
    let imgel = document.querySelector(`img`);
    imgel.addEventListener(`mouseover`, function(){
imgel.style.width = `300px`;
imgel.style.height = `300px`;
imgel.style.transition = `1s`;
    });
document.addEventListener(`mouseout`, function(){
    imgel.style.width = `150px`;
    imgel.style.height = `150px`;
    imgel.style.transition = `1s`;
});
}