import { useEffect } from 'react';

export function useMovieList() {
  function searchMovie(title) {
    fetch(`http://www.omdbapi.com/?apikey=2ae02041&s=${title}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }
  return { searchMovie }
}