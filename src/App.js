import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import './App.css';





function App() {

  const URL = 'http://api.exchangeratesapi.io/v1/latest?'

  function params(paramsObj) {
    return new URLSearchParams({
      access_key: 'cc6543cc8c859c21f93cf63a2a2c6002',
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


      <div className="left">
        <div className="top">Currency calculator</div>
        <div className="first-option">
          <input type="number" className="first-input" value={fromAmount} onChange={handleFromAmountChange} />
          <select>

            <option >EUR</option>


          </select>
        </div>

        <div className="first-flag">
          <div className="first-flag-block">
            <img src="/flags/eur.png" alt="Brak" />
            <p>1 EUR = {oneAmount} {toCurrency}</p>
          </div>
        </div>

        <div className="second-option">
          <Search
            currencyOption={currencyOption}
            selectCurrency={toCurrency}
            changeCurrency={e => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          />
        </div>
        <div className="second-flag">
        
        <div className="second-flag-block">
            <img src={`/flags/${toCurrency}.png`} onError={(e)=>{e.target.onerror = null; e.target.src="/flags/error.png"}}/>
            <p>1 {toCurrency} = {Number((eurAmount))} EUR</p>
          </div>
        </div>
        <div className="footer">
          <p>Create by Sebastian Harasim & Dominik Gwizdała</p>
        </div>

      </div>
      
    </div>

  );
}

export default App;
