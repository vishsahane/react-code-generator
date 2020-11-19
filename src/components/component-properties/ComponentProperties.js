
import React from 'react'

import './ComponentProperties.css'
import Property from './Property'

const ComponentProperties = (props) => {
  const {pages,setPages} = props
  let selectedPage = pages.find(page => page.isSelected)
  let selectedControl = selectedPage? selectedPage.controls.find(control => control.isSelected): null
  
  return (
    <div className="section page-properties">
      <div className="title">Component Properties</div>
      <div className="content">
        <ul>
          {selectedControl && selectedControl.properties.map((property, propertyKey) => 
            <Property property={property} />
          )}
        </ul>
      </div>
    </div>
  )
}

export default ComponentProperties