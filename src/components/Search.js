import React from 'react'


function Search(props) {
  const {
    currencyOption,
    selectCurrency,
    changeCurrency,
    amount,
    onChangeAmount
  } = props


  return (
    //<input type="number" className="input" value={amount} onChange={onChangeAmount}/>
    //<img src={`/flags/${selectCurrency}.png`}/>
    <div className= "custom-select">
      
      <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
      <select value={selectCurrency} onChange={changeCurrency}>
        {currencyOption.map((option, index) => (
          <option key= {index} value={option}>{option}</option>
        ))}
       <span className='custom-arrow'></span> 
      </select>
      
      <img src={`/flags/${selectCurrency}.png`} alt="Brak"/>
    </div>
    
  );
}


export default Search;