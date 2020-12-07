
import React from 'react'
import _ from 'lodash'

const Property = (props) => {
  const {pages, setPages, property, selectedPath, propertyKey} = props
  const { label, type, options, value } = property
  //console.log("property", property)
  let propertyPath = `${selectedPath}.properties.${propertyKey}`
  const onPropertyChange = (event) => {
    //console.log("event", event, event.target.value)
    //let updatedPages =[...pages]
    let updatedPages = JSON.parse(JSON.stringify(pages))
    let oldProperty = _.get(updatedPages, propertyPath)
    let updatedProperty = {...oldProperty,value: event.target.value}
    
    console.log("XXXXXXXXX1", selectedPath, pages, oldProperty, updatedProperty)
    updatedPages = _.set(updatedPages, propertyPath, updatedProperty)
    setPages(updatedPages)
    console.log("XXXXXXXXX2", propertyPath, updatedPages)
  }
  let propertyControl = ''
  switch (type) {
    case 'text':
    case 'object':
      propertyControl = <input type="text" className="standard-input" onChange={onPropertyChange} value={value}/>
      break
    case 'dropdown':
      propertyControl = <select className="standard-input" onChange={onPropertyChange}>
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