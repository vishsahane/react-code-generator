
import React from 'react'

import './UIComponents.css'
import { CONTROLS } from '../../constants/controls'

const UIComponents = () => {
  return (
    <div className="section ui-components">
      <div className="title">UI Components</div>
      <div className="content">
        <ul>
          {CONTROLS.map((control, key) =>
            <li key={key}>
              <button type="button" className="control-btn">{control.label}</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default UIComponents