import React, { useState, useCallback, useEffect } from 'react';
// import { useMovieList } from '../hook/useMovieList';
import useDebounce from '../hook/useDebounce';

function SearchBar(props) {
  // const { searchMovie } = useMovieList();
  const [value, setValue] = useState('')
  const title = useDebounce(value, 400)
  const onSearch = useCallback(props.onSearch, [title])
  useEffect(() => {
    onSearch(title);
  }, [title, onSearch])
  return(
    <form onSubmit={event => event.preventDefault()}>
      {/* <button onClick={searchMovie(title)}>ah</button> */}
      <input
        name='search'
        value={value}
        type='text'
        onChange={event => setValue(event.target.value)}/>
    </form>
  )
}

export default SearchBar;