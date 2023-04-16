const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value;
  searchMovies(searchTerm);
});

async function searchMovies(searchTerm) {
  const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=e73520d2`);
  const data = await response.json();

  if (data.Search) {
    const movies = data.Search;
    searchResults.innerHTML = '';

    movies.forEach((movie) => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
        <img src="${movie.Poster}">
        <div class="movie-info">
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
        </div>
      `;
      searchResults.appendChild(movieElement);
    });
  } else {
    searchResults.innerHTML = '<p>No movies found</p>';
  }
}




