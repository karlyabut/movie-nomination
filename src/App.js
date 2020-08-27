import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import axios from 'axios';

function App() {
  // const { searchMovie } = useMovieList();
  const [title, setTitle] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=2ae02041&s=${title}`)
    .then(res => setResults(res.data))
  }, [title])
  return (
    <div className="App">
      <SearchBar onSearch={title => setTitle(title)}/>
      <ResultList result={results}/>
    </div>
  );
}

export default App;
