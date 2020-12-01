
import React from 'react'
import _ from 'lodash'

import './ComponentProperties.css'
import Property from './Property'

const ComponentProperties = (props) => {
  const { pages, setPages, selectedPath } = props
  let selectedControl = _.get(pages, selectedPath)
  return (
    <div className="section page-properties">
      <div className="title">Component Properties</div>
      <div className="content">
        <ul>
          {selectedControl && selectedControl.properties ?
            selectedControl.properties.map((property, propertyKey) =>
              <Property property={property} pages={pages} setPages={setPages}
                selectedPath={selectedPath} propertyKey={propertyKey} />
            )
            :
            <p className="note">Drag &amp; drop any component in main viewer to see it's properties here..</p>
          }
        </ul>
      </div>
    </div>
  )
}

export default ComponentProperties