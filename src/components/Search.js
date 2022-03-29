import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'pl', value: 'pl', flag: 'pl', text: 'Poland' },
  { key: 'es', value: 'es', flag: 'es', text: 'Spain' },
  { key: 'us', value: 'us', flag: 'us', text: 'United States' },
  { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
  { key: 'gb', value: 'gb', flag: 'gb', text: 'England' }
]

const DropdownExampleSearchSelection = () => (
  <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryOptions}
  />
)

export default DropdownExampleSearchSelection;
