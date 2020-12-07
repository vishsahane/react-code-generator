
import React, { useState } from 'react'

import './Editor.css'
import { CONTROLS } from '../../constants/controls'
import PageExplorer from '../page-explorer/PageExplorer'
import UIComponents from '../ui-components/UIComponents'
import PageEditor from '../page-editor/PageEditor'
import ComponentProperties from '../component-properties/ComponentProperties'
import { Loading } from '../common'

const Editor = () => {
  const initialPages = []
  const [pages, setPages] = useState(initialPages)
  const [selectedPath, setSelectedPath] = useState('')
  const [showSpinner, setShowSpinner] = useState(false)

  return (<div className="container">
    <div className="flex">
      <div className="col-1">
        <PageExplorer pages={pages} setPages={setPages} selectedPath={selectedPath}
          setSelectedPath={setSelectedPath} />
        <UIComponents />
      </div>
      <div className="col-2">
        <PageEditor pages={pages} setPages={setPages} selectedPath={selectedPath}
          setSelectedPath={setSelectedPath} setShowSpinner={setShowSpinner}/>
      </div>
      <div className="col-3">
        <ComponentProperties pages={pages} setPages={setPages}
          selectedPath={selectedPath} />
      </div>
    </div>
    <Loading showSpinner={showSpinner} />
  </div>
  )
}

export default Editor
