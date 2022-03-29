import React from "react";
import Search from "./components/Search";
import './App.css';

const App = () => {
  return (
    <div className="main">
      <div className="left">
      <div className="left_search">
        <Search />
      </div>
      </div>
      <div className="center">
        <button className="ui primary button">
          Zmień
        </button>
      </div>
      <div className="right">
      <div className="right_search">
        <Search />
      </div>
      </div>

    </div>

  );
}

export default App;
