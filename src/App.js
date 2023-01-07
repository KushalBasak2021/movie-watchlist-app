import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Add from "./components/Add";
import { AppProvider } from "./context/GlobalContext";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  return (
    <AppProvider>
      <Router>
        <div className="movie-watchlist-container">
          <Header />
          <Routes>
            <Route path="/" element={<WatchList />} />
            <Route path="watched" element={<Watched />} />
            <Route
              path="add"
              element={<Add query={query} setQuery={setQuery} />}
            />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
