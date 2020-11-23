
import React from 'react'
import _ from 'lodash'

const Property = (props) => {
  const {pages, setPages, property, selectedPath, propertyKey} = props
  const { label, type, options, value } = property
  console.log("property", property)
  let propertyPath = `${selectedPath}.properties.${propertyKey}`
  const onPropertyChange = (event) => {
    //console.log("event", event, event.target.value)
    let updatedPages =[...pages]
    updatedPages = _.set(updatedPages, propertyPath, {..._.get(updatedPages, propertyPath),value: event.target.value})
    setPages(updatedPages)
    console.log("UPPROPERTY", propertyPath,{..._.get(updatedPages, propertyPath),value: event.target.value})
  }
  let propertyControl = ''
  switch (type) {
    case 'text':
      propertyControl = <input type="text" onChange={onPropertyChange} value={value}/>
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