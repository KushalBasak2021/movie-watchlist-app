import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";

const MovieContainer = ({ movie }) => {
  const { dispatch, watchList, watched } = useContext(AppContext);

  let storedMovie = watchList.find((o) => o.id === movie.id);
  let watchedMovie = watched.find((o) => o.id === movie.id);
  let IsPresentToWatchListOrWatched = storedMovie
    ? true
    : watchedMovie
    ? true
    : false;

  let IsPresentToWatched = watchedMovie ? true : false;

  function handleWatchListClick() {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
  }

  function handleWatchedClick() {
    dispatch({ type: "ADD_TO_WATCHED", payload: movie });
  }

  return (
    <div className="movie-container">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt="movie-poster"
      />
      <div className="desc">
        <h3>{movie.original_title}</h3>
        {movie.release_date ? (
          <p>{movie.release_date.split("-")[0]}</p>
        ) : (
          <p></p>
        )}
        <div className="button">
          <button
            className="btn btn-watchlist"
            onClick={handleWatchListClick}
            disabled={IsPresentToWatchListOrWatched}
          >
            Add to WatchList
          </button>
          <button
            className="btn btn-watchlist"
            onClick={handleWatchedClick}
            disabled={IsPresentToWatched}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieContainer;
