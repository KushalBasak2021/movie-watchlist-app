import React, { useEffect, useState } from "react";
import MovieContainer from "./MovieContainer";

const Add = ({ query, setQuery }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getMovie = (query) => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d553fb865d96d1185c66ce6be64d8e2d&language=en-US&page=1&include_adult=false&query=${query}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setData(data.results);
          } else {
            setData([]);
          }
        });
    };

    if (query !== "") {
      getMovie(query);
    }
  }, [query]);

  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <div className="add">
      <input
        type="text"
        placeholder="Search a movie"
        value={query}
        onChange={handleChange}
      />
      {data.length > 0 ? (
        <div className="movie-container-list">
          {data.map((movie) => (
            <MovieContainer movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="movie-container-list"></div>
      )}
    </div>
  );
};

export default Add;
