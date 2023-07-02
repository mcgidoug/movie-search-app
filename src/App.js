import React, { useState } from "react";
import { getMovies } from "./api/movies";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (userInput, page = 1) => {
    const data = await getMovies(userInput, page);
    const movies = data.Search;
    console.log(data);
    setMovies(movies);
  };

  return (
    <div className="App">
      <SearchBar handleSubmit={handleSubmit} />
      <Results movies={movies} />
    </div>
  );
}

export default App;
