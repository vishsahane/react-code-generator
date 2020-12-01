
import React from 'react'

import './UIComponents.css'
import Control from './Control'
import { CONTROLS } from '../../constants/controls'

const UIComponents = (props) => {
  return (
    <div className="section ui-components">
      <div className="title">UI Components</div>
      <div className="content">
        <ul>
          {CONTROLS.map((control, key) =>
            <li key={key}>
              <Control control={control} />
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default UIComponents
