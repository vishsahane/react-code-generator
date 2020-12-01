
import React from 'react'
import { useDrop } from 'react-dnd'
import _ from 'lodash'

const Control = (props) => {
  const { control, onControlSelection, controlPath, selectedPath, onControlDrop } = props

  //console.log("render control", control, controlPath, selectedPath)
  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: 'UICOMPONENT',
    drop(item, monitor) {
      const didDrop = monitor.didDrop()
      if (didDrop) {
        return;
      }
      console.log("CONTROL DROP", item, controlPath, didDrop)
      onControlDrop(item.control, controlPath)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  })
  let backgroundColor = ''
  if (isOverCurrent) {
    backgroundColor = '#17a2b8'
  }

  return control.isContainer ? <div
    className={'btn-dropped-control ' + (selectedPath === controlPath ? 'selected' : '')}
    style={{ backgroundColor: backgroundColor }}
    onClick={(event) => onControlSelection(event, controlPath)} ref={drop}>
    {control.label}
    {control.controls.map((childControl, childControlIndex) => {
      return <Control control={childControl} selectedPath={selectedPath}
        controlPath={`${controlPath}.controls.${childControlIndex}`}
        onControlSelection={onControlSelection} onControlDrop={onControlDrop} />
    })}</div> : <button
      className={'btn-dropped-control ' + (selectedPath === controlPath ? 'selected' : '')}
      onClick={(event) => onControlSelection(event, controlPath)}>
      {control.label}
    </button>
}

export default Control
