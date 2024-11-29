window.onload = function(){
  
  const swapiel = `https://swapi.dev/api/people/1/`;
    fetch (swapiel)
    .then(response => response.json())
    .then(person => {
      const usersList = document.getElementById('users-list');
        usersList.innerHTML = `<p> Name character:${person.name}  </p>` ;
        
    });
    const swapielsecond = `https://swapi.dev/api/posts?userId=1`;
    fetch (swapielsecond)
    .then(response => response.json())
    .then(posts => {
      const postsList = document.getElementById('posts-list');
            posts.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = post.title;
                postsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Помилка:', error));

        const swapielthird = `https://swapi.dev/api/people/1/`;
    fetch (swapielthird)
    .then(response => response.json())
    .then(person => {
      const detaiList = document.getElementById('user-details');
        detaiList.innerHTML = `
        <p>  Name character:${person.name}</p>
        <p> Height:${person.height}</p>
        <p>Mass:${person.mass}</p>
        <p>Hair color:${person.hair_color}</p>
        <p>Skin color:${person.skin_color}</p>
        <p>Eye color:${person.eye_color}</p>
        <p>Birth:${person.birth_year}</p>
        <p>Gender:${person.gender}</p>
         
        ` ;
    });  
  document.getElementById(`load-planet-btn`).addEventListener(`click`, function(){
fetch(`https://swapi.dev/api/planets/1/`).
then(response => response.json()). 
then(planet => {
  const planetDetails = document.getElementById('planet-details');
  planetDetails.style.display = 'block';  
  planetDetails.innerHTML = `
      <h2>Планета: ${planet.name}</h2>
      <p><strong>Діаметр:</strong> ${planet.diameter}</p>
      <p><strong>Територія:</strong> ${planet.terrain}</p>
      <p><strong>Населення:</strong> ${planet.population}</p>
      <p><strong>Ресурси:</strong> ${planet.residents.map(url => 
        `<a href="${url}" class="link" target="_blank">${url}</a>`).join('<br>')}</p>
  `;
})
.catch(error => {
  console.error('Помилка:', error);
});
});
}