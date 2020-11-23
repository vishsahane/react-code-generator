
import React from 'react'
import _ from 'lodash'

import './ComponentProperties.css'
import Property from './Property'

const ComponentProperties = (props) => {
  const {pages,setPages, selectedPath} = props
  let selectedControl = _.get(pages, selectedPath)
  return (
    <div className="section page-properties">
      <div className="title">Component Properties</div>
      <div className="content">
        <ul>
          {selectedControl && selectedControl.properties && selectedControl.properties.map((property, propertyKey) => 
            <Property property={property} pages={pages} setPages={setPages}
              selectedPath={selectedPath} propertyKey={propertyKey}/>
          )}
        </ul>
      </div>
    </div>
  )
}

export default ComponentProperties