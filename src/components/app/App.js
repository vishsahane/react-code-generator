
import React, { useState } from 'react'

import './App.css'
import { CONTROLS } from '../../constants/controls'
import PageExplorer from'../page-explorer/PageExplorer'
import UIComponents from'../ui-components/UIComponents'
import PageEditor from'../page-editor/PageEditor'
import ComponentProperties from'../component-properties/ComponentProperties'

const App = () => {
  const initialPages = [
    { name: 'Test Component 1', isSelected:true, controls:[]},
    { name: 'Test Component 2', isSelected:false, controls:[]}
  ]
  const [pages, setPages] = useState(initialPages)

  return (
    <div className="container">
      <div className="flex">
        <div className="col-1">
          <PageExplorer pages={pages} setPages={setPages}/>
          <UIComponents pages={pages} setPages={setPages}/>
        </div>
        <div className="col-2">
          <PageEditor pages={pages} setPages={setPages}/>
        </div>
        <div className="col-3">
          <ComponentProperties pages={pages} setPages={setPages}/>
        </div>
      </div>
    </div>
  )
}

export default App