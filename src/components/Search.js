import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
function Search()
{
  const countryOptions = [
    { key: 'pl', value: 'pl', flag: 'pl', text: 'Poland' },
    { key: 'es', value: 'es', flag: 'es', text: 'Spain' },
    { key: 'us', value: 'us', flag: 'us', text: 'USA' },
    { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
    { key: 'gb', value: 'gb', flag: 'gb', text: 'England' }
  ]

  const [result,ddlvalue]=useState(countryOptions.text);
  const ddlHandler = e => 
  {
    ddlvalue(e.text)
  }
  return(
    <div>
      <Dropdown
        placeholder='Select Country'
        fluid
        search
        selection
        options={countryOptions}
        onChange={ddlHandler}
      />
      <h1>{result}</h1>
    </div>
  )
}

export default Search;


/*import React, { useState } from 'react'
import Select from 'react-select'
import Flags from 'country-flag-icons/react/3x2'
function Search()
{
  var countryOptions = [
    { value: 'PL', label: 'Poland' },
    { value: 'ES', label: 'Spain' },
    { value: 'US', label: 'USA' },
    { value: 'AT', label: 'Austria' },
    { value: 'GB', label: 'England' }
  ];


  const [countryValue,ddlvalue]=useState(countryOptions.value);
  const [countryLabel,ddllabel]=useState(countryOptions.label);
  const ddlHandler = e =>
  {
    ddlvalue(e.value);
    ddllabel(e.label);
  }

  return(
    <div>
      <Select options={countryOptions} onChange={ddlHandler}/>
      <h1>{countryValue}</h1>
      <h1>{countryLabel}</h1>
      <Flags.US />
    </div>
  );
}

export default Search;*/