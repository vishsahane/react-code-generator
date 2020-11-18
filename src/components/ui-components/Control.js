
import React from 'react'
import { useDrag } from 'react-dnd'

const Control = (props) => {
  const { control, onControlDrop } = props
  const [{ isDragging }, drag] = useDrag({
    item: { control: control, type: 'UICOMPONENT' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        //alert(`You dropped ${item.name} into ${dropResult.name}!`);
        onControlDrop(item, dropResult)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;

  return (
    <button type="button" className="control-btn" ref={drag} style={{opacity }}>
      {control.label}
    </button>
  )
}

export default Control