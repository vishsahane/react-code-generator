
import React from 'react'

const Property = (props) => {
  const { label, type, options } = props.property

  let propertyControl = ''
  switch (type) {
    case 'text':
      propertyControl = <input type="text" />
      break
    case 'dropdown':
      propertyControl = <select>
        {options.map((option, optionKey) => <option value={option.value}>{option.label}</option>)}
      </select>
      break
  }

  return (
    <li className="property-row">
      <div className="property-name">
        <label>{label}</label>
      </div>
      <div className="property-value">
        {propertyControl}
      </div>
    </li>
  )
}

export default Property