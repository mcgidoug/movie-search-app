import React from "react";

const Results = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies &&
          movies.map((movie) => {
            return <li key={movie.imdbID}>{movie.Title}</li>;
          })}
      </ul>
      <button>{"<"}</button>
      <button>{">"}</button>
    </div>
  );
};

export default Results;
