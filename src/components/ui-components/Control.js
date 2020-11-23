
import React from 'react'
import { useDrag } from 'react-dnd'
import _ from 'lodash'

const Control = (props) => {
  const { control, pages, setPages, selectedPath, setSelectedPath } = props
  console.log("UIControl", pages)
  const [{ isDragging }, drag] = useDrag({
    item: { control: control, type: 'UICOMPONENT' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {        
        let updatedPages = [...pages]
        let selectedControl = _.get(updatedPages, selectedPath)
        updatedPages = _.set(updatedPages, selectedPath, { ...selectedControl, controls: [...selectedControl.controls, { ...item.control, controls: [] }] })
        setPages(updatedPages)
        setSelectedPath(`${selectedPath}.controls.${selectedControl.controls.length}`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;

  return (
    <button type="button" className="control-btn" ref={drag} style={{ opacity }}>
      {control.label}
    </button>
  )
}

export default Control