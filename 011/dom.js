window.onload = function(){
    let firstelement = document.querySelector( `#tree`);
    let [...firstlevel] = firstelement.children;
    console.log(firstlevel.length);

    let secondelement = 0;
    for(let i = 0;i<firstlevel.length;i++){
        secondelement += firstlevel[i].children.length;
    }
    console.log(secondelement);

const booksArray = [

    {

        title: 'Пригоди Аліси в Країні Див',

        year: 1865,

        rating: 4.5

    },

    {

        title: '1984',

        year: 1949,

        rating: 4.8

    },

    {

        title: 'Гаррі Поттер і філософський камінь',

        year: 1997,

        rating: 4.7

    }

];
let bookel = document.querySelector(`table`);

function createrow(book){
    let row = document.createElement(`tr`)
    let titlecell = document.createElement(`td`);
    let  yearcell = document.createElement(`td`);
    let ratingcell = document.createElement(`td`);
    titlecell.textContent = book.title;
    yearcell.textContent = book.year;
  ratingcell.textContent = book.rating;
  row. appendChild(titlecell);
  row. appendChild(yearcell);
  row. appendChild(ratingcell);
  return row;
}

for(book of booksArray){
 
  bookel.appendChild(createrow(book));
}
}