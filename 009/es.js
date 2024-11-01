const numb1 = [1,2,3,4];
const numb2 = [5,6,7,8];
const combo = [...numb1,...numb2];
console.log(combo);

// рядок і масив

function restfntest(firstarg,...arg){
    console.log(firstarg);
    console.log(arg);
}
 restfntest("Це перший аргумент", 2, 3, 4, 5);

 //
 function calculateAverage(...numbers) {
     
    if (numbers.length === 0) {
        return 0;  
    }
    let sum = 0;
 
    for (const num of numbers) {
        sum += num;
    }
 
    const average = sum / numbers.length;

    return average;
}

 
const avg = calculateAverage(10, 20, 30, 40, 50);
console.log(`Середнє значення:${avg}` );

//

function type(value){
    const types = typeof value;
    console.log(`тип ${types}`)

}
type(43);
type(`Hello`);