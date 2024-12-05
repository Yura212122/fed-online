 async function fetchdata () {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/1/`) ;
    let user = await res.json();
     console.log(user.name);
     console.log(user.email);
 }
 fetchdata();

 async function fetchfilm () {
    let res1 = await fetch(`https://swapi.dev/api/films/1/`) ;
    let name = await res1.json();
console.log(name.title);
console.log(name.release_date);
 }
 fetchfilm();