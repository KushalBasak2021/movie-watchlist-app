import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="">WatchList</Link>
      </h1>
      <div className="header-right">
        <ul>
          <li>
            <Link to="">WatchList</Link>
          </li>
          <li>
            <Link to="watched">Watched</Link>
          </li>
        </ul>
        <button className="btn add-btn">
          <Link to="add">+ ADD</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
