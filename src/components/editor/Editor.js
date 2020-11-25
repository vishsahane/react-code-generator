
import React, { useState } from 'react'

import './Editor.css'
import { CONTROLS } from '../../constants/controls'
import PageExplorer from '../page-explorer/PageExplorer'
import UIComponents from '../ui-components/UIComponents'
import PageEditor from '../page-editor/PageEditor'
import ComponentProperties from '../component-properties/ComponentProperties'

const Editor = () => {
  const initialPages = [
    {
      name: 'Test Component 1',
      controls: [{
        label: 'Div', name: 'div', isContainer: true,
        properties: [
          { label: 'className', name: 'className', type: 'text', required: false, value: '' },
          { label: 'Custom Style', name: 'customStyle', type: 'text', required: false, value: '' }
        ],
        controls: [{
          label: 'Div', name: 'div', isContainer: true,
          properties: [
            { label: 'className', name: 'className', type: 'text', required: false, value: '' },
            { label: 'Custom Style', name: 'customStyle', type: 'text', required: false, value: '' }
          ],
          controls: [{
            label: 'Textarea', name: 'textarea', isContainer: false,
            properties: [
              { label: 'name', name: 'name', type: 'text', required: false, value: '' },
              { label: 'id', name: 'id', type: 'text', required: false, value: '' },
              { label: 'className', name: 'className', type: 'text', required: false, value: '' },
              { label: 'Custom Style', name: 'customStyle', type: 'text', required: false, value: '' },
              {
                label: 'disabled', name: 'disabled', type: 'dropdown', required: false, value: '',
                options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
              },
              {
                label: 'autoFocus', name: 'autoFocus', type: 'dropdown', required: false, value: '',
                options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
              }
            ]
          }]
        }]
      }]
    },
    { name: 'Test Component 2', controls: [] }
  ]
  const [pages, setPages] = useState(initialPages)
  const [selectedPath, setSelectedPath] = useState('0.controls.0.controls.0')

  return (
    <div className="container">
      <div className="flex">
        <div className="col-1">
          <PageExplorer pages={pages} setPages={setPages} selectedPath={selectedPath}
            setSelectedPath={setSelectedPath} />
          <UIComponents pages={pages} setPages={setPages} selectedPath={selectedPath}
            setSelectedPath={setSelectedPath} />
        </div>
        <div className="col-2">
          <PageEditor pages={pages} selectedPath={selectedPath}
            setSelectedPath={setSelectedPath} />
        </div>
        <div className="col-3">
          <ComponentProperties pages={pages} setPages={setPages}
            selectedPath={selectedPath} />
        </div>
      </div>
    </div>
  )
}

export default Editor