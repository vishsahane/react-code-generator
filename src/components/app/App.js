
import React, { useState } from 'react'

import './App.css'
import { CONTROLS } from '../../constants/controls'
import PageExplorer from'../page-explorer/PageExplorer'
import UIComponents from'../ui-components/UIComponents'
import PageEditor from'../page-editor/PageEditor'
import ComponentProperties from'../component-properties/ComponentProperties'

const App = () => {
  const [pages, setPages] = useState([{ name: 'Test Component' }])
  const [selectedPage, setSelectedPage] = useState({ name: 'Test Component' })
  return (
    <div className="container">
      <div className="flex">
        <div className="col-1">
          <PageExplorer pages={pages}/>
          <UIComponents />
        </div>
        <div className="col-2">
          <PageEditor/>
        </div>
        <div className="col-3">
          <ComponentProperties/>
        </div>
      </div>
    </div>
  )
}

export default App