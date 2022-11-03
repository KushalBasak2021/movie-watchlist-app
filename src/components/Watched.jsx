import React, { useContext } from "react";
import Moviecard from "./WatchedMovieCard";
import { AppContext } from "../context/GlobalContext";

const Watched = () => {
  const { watched } = useContext(AppContext);
  return (
    <div className="watched">
      <div className="top">
        <h2>Watched Movie</h2>
        <div className="btn movie-count">{watched.length} Movies</div>
      </div>
      <div className="movie-watched-list">
        {watched.map((movie) => (
          <Moviecard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Watched;
