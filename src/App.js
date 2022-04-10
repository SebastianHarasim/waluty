import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import './App.css';





function App() {

  const URL = 'http://api.exchangeratesapi.io/v1/latest?'

  function params(paramsObj) {
    return new URLSearchParams({
      access_key: '7565e81fec35c90619ff5db30a25bd61',
      ...paramsObj
    });
  }



  const [currencyOption, setCurrencyOption] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountFromCurrency, setAmountFromCurrency] = useState(true)

  const oneAmount = 1 * exchangeRate
  const eurAmount = 1 / exchangeRate

  let toAmount, fromAmount
  if (amountFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate || 0
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

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
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

      <div className="top">KALKULATOR WALUT</div>
      <div className="left">
        <div className="left_search">
          <input type="number" className="input" value={fromAmount} onChange={handleFromAmountChange} />
          <select>
    
          <option >EUR</option>
        
       
      </select>
      <img src={`/flags/eur.png`} alt="Brak"/>
        </div>
      </div>
      <div className="center">
        1 EUR = {oneAmount} {toCurrency}
        1 {toCurrency} = {Number((eurAmount).toFixed(6))} EUR
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
