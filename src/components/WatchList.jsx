import React, { useContext } from "react";
import Moviecard from "./WatchListMoviecard";
import { AppContext } from "../context/GlobalContext";

const WatchList = () => {
  const { watchList } = useContext(AppContext);
  return (
    <div className="watch-list">
      <div className="top">
        <h2>My WatchList</h2>
        <div className="btn movie-count">
          {watchList.length} {watchList.length > 1 ? "Movies" : "Movie"}
        </div>
      </div>
      <div className="movie-watch-list">
        {watchList.map((movie) => (
          <Moviecard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default WatchList;
