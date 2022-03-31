import React, { useState } from "react";
import Search from "./components/Search";
import './App.css';



function App() {

  const [selects, setSelects] = useState();

  return (
    <div className="main">
      <div className="left">
        <h1>{selects}</h1>
        <select value={selects} onChange={e => setSelects(e.target.value)}>
          <option>sadasd</option>
          <option>dfgdfg</option>
          <option>dfgdfgd</option>
        </select>
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
