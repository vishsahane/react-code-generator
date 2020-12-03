
import React from 'react'
import { useDrop } from 'react-dnd'
import _ from 'lodash'
import axios from 'axios'
import { Link } from "react-router-dom";

import './PageEditor.css'
import Control from './Control'

const PageEditor = (props) => {
  const { pages, setPages, selectedPath, setSelectedPath } = props
  let selectedPage = pages[selectedPath.charAt(0)]

  const [{ canDrop, isOver, isOverCurrent }, drop] = useDrop({
    accept: 'UICOMPONENT',
    drop(item, monitor) {
      const didDrop = monitor.didDrop()
      if (didDrop)
        return
      console.log("PAGE DROP", item, `${selectedPath.charAt(0)}`, didDrop)
      onControlDrop(item.control, `${selectedPath.charAt(0)}`)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = canDrop && isOver
  let backgroundColor = ''
  if (isOverCurrent) {
    backgroundColor = '#17a2b8'
  }
  const onControlDrop = (control, path) => {
    let updatedPages = [...pages]
    let selectedControl = _.get(updatedPages, path)
    let updatedControl = { ...selectedControl, controls: [...selectedControl.controls, { ...control, controls: [] }] }
    updatedPages = _.set(updatedPages, path, updatedControl)
    setPages(updatedPages)
    console.log("onControlDrop", path, updatedControl)
    setSelectedPath(`${path}.controls.${updatedControl.controls.length - 1}`)
  }
  const generateCode = () => {
    console.log("generateCode", pages)
    axios.post('http://localhost:7000/api/generateComponentFile', pages)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  const previewCode = () => {
    console.log("previewCode", pages)
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
        selectedPath={selectedPath} onControlDrop={onControlDrop} />
    </li>
  })

  return (
    <div className="section page-editor">
      <div className="title">Page Editor</div>
      <div className={'content ' + (selectedPath.length === 1 ? 'selected' : '')}
        style={{ backgroundColor: backgroundColor }}
        onClick={(event) => onControlSelection(event, selectedPath.charAt(0))} ref={drop} >
        <ul>
          {conrtolList}
        </ul>
        {isActive ? 'Release to drop component' : 'Drag UI Component here...'}
      </div>
      <div className="button-bar">
        <button className="secondary-btn code-btn" onClick={() => generateCode()}>Generate</button>
        {/* <button className="standard-btn code-btn" onClick={() => previewCode()}>Preview</button> */}
        <Link to="/preview" target="_blank" className="standard-btn code-btn">Preview</Link>
      </div>
    </div>
  )
}

export default PageEditor