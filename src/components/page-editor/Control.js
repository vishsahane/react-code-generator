
import React from 'react'
import { useDrop } from 'react-dnd'

const Control = (props) => {
  const { control, onControlSelection, controlPath, selectedPath } = props
  //console.log("render control", control, controlPath, selectedPath)
  
  return control.isContainer ? <div
    className={'btn-dropped-control ' + (selectedPath === controlPath ? 'selected' : '')} 
    onClick={(event)=> onControlSelection(event,controlPath)}>
    {control.label}
    {control.controls.map((childControl,childControlIndex) => {
      return <Control control={childControl} 
      controlPath={`${controlPath}.controls.${childControlIndex}`}
      selectedPath={selectedPath}
      onControlSelection={onControlSelection} />
    })}</div> : <button
      className={'btn-dropped-control ' + (selectedPath === controlPath ? 'selected' : '')}
      onClick={(event)=>onControlSelection(event,controlPath)}>
      {control.label}
    </button>
}

export default Control