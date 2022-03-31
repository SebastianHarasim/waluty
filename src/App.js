import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import './App.css';





function App() {

/*
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
*/

  const URL = 'http://api.exchangeratesapi.io/v1/latest?'

  function params(paramsObj) {
    return new URLSearchParams({
      access_key: '8212180f5da96fd82094a89218f3dd07',
      ...paramsObj
    });
  }



  const [currencyOption, setCurrencyOption] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountFromCurrency, setAmountFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(`${URL}${params(App)}`)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOption([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  useEffect(() =>{
    if (fromCurrency != null && toCurrency != null){
      fetch(`${URL}${params(App)}&base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountFromCurrency(false)
  }

  return (

    <div className="main">
      <div className="left">
        <div className="left_search">
          <Search
            currencyOption={currencyOption}
            selectCurrency={fromCurrency}
            changeCurrency={e => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
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
            currencyOption={currencyOption} 
            selectCurrency={toCurrency}
            changeCurrency={e => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          />
        </div>
      </div>

    </div>



  );
}

export default App;
