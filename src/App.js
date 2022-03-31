import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import './App.css';





function App() {


  //flaga
  const [flagURL, setFlagURL] = useState(
    "https://countryflagsapi.com/png/"
  );
  const [identifier, setIdentifier] = useState("")


//flaga
  const handleButtonClick = () => {
    const url = "https://countryflagsapi.com/png/"
    setFlagURL(url + identifier)
  };


  const URL = 'http://api.exchangeratesapi.io/v1/latest?'

  function params(paramsObj) {
    return new URLSearchParams({
      access_key: '8212180f5da96fd82094a89218f3dd07',
      ...paramsObj
    });
  }



  const [currencyOption, setCurrencyOption] = useState([])
  const [formCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()


  useEffect(() => {
    fetch(`${URL}${params(App)}`)
      .then(res => res.json())
      .then(data => {
        setCurrencyOption([data.base, ...Object.keys(data.rates)])
      })
  }, [])



  return (

    <div className="main">
      <div className="left">
        <div className="left_search">
          <Search
            currencyOption={currencyOption}
            onChange={(e) => setIdentifier(e.target.value)}
          />
        </div>
      </div>
      <div className="center">
        <button className="ui primary button">
          Zmień
        </button>

      </div>
      <div className="right">
        <div className="right_search">
          <Search
            currencyOption={currencyOption} />
        </div>
      </div>

    </div>



  );
}

export default App;
