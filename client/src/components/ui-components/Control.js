
import React from 'react'
import { useDrag } from 'react-dnd'
import _ from 'lodash'

const Control = (props) => {
  const { control } = props
  //console.log("UIControl", pages)
  const [{ isDragging }, drag] = useDrag({
    item: { control: control, type: 'UICOMPONENT' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0.4 : 1
  return (
    <button type="button" className="control-btn" ref={drag} style={{ opacity }}>
      {control.label}
    </button>
  )
}

export default Control
