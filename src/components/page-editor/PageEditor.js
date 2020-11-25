
import React from 'react'
import { useDrop } from 'react-dnd'
import _ from 'lodash'

import './PageEditor.css'
import Control from './Control'

const PageEditor = (props) => {
  const { pages, selectedPath, setSelectedPath } = props
  let selectedPage = pages[selectedPath.charAt(0)]

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'UICOMPONENT',
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  }
  else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  const onControlSelection = (event, controlPath) => {
    //console.log("controlPath", controlPath)
    event.stopPropagation()
    setSelectedPath(controlPath)
  }
  const conrtolList = selectedPage && selectedPage.controls.map((control, controlIndex) => {
    return <li key={controlIndex}>
      <Control control={control} onControlSelection={onControlSelection}
        controlPath={`${selectedPath.charAt(0)}.controls.${controlIndex}`}
        selectedPath={selectedPath} />
    </li>
  })

  return (
    <div className="section page-editor">
      <div className="title">Page Editor</div>
      <div className={'content ' + (selectedPath.length === 1 ? 'selected' : '')}
        onClick={(event) => onControlSelection(event, selectedPath.charAt(0))} ref={drop} >
        <ul>
          {conrtolList}
        </ul>
        {isActive ? 'Release to drop component' : 'Drag UI Component here...'}
      </div>
      <div className="button-bar">
        <button className="secondary-btn code-btn">Generate</button>
        <button className="standard-btn code-btn">Preview</button>
      </div>
    </div>
  )
}

export default PageEditor