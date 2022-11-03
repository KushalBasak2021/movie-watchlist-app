import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";

const Moviecard = ({ movie }) => {
  const { dispatch } = useContext(AppContext);
  function handleCrossClick() {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: movie });
  }
  function handleEyeClick() {
    dispatch({
      type: "REMOVE_FROM_WATCHLIST_ADDED_TO_WATCHED",
      payload: movie,
    });
  }
  return (
    <div className="moviecard">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
      <div className="movie-control">
        <i className="fas fa-eye" onClick={handleEyeClick}></i>
        <i className="fas fa-times" onClick={handleCrossClick}></i>
      </div>
    </div>
  );
};

export default Moviecard;
