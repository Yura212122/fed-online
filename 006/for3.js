const students = [

    { name: 'Alice', age: 20, grade: 'A' },

    { name: 'Bob', age: 22, grade: 'B' },

    { name: 'Charlie', age: 21, grade: 'C' }

];
for(const value of students){
    console.log( `name ${value.name}, has ${value.age}, and his grade${value.grade}` );
}