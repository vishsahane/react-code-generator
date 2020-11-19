
import React from 'react'
import { useDrag } from 'react-dnd'

const Control = (props) => {
  const { control, pages,setPages } = props
  const [{ isDragging }, drag] = useDrag({
    item: { control: control, type: 'UICOMPONENT' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        //alert(`You dropped ${item.name} into ${dropResult.name}!`);
        const updatedPages = pages.map((page, index) => {
          if(page.isSelected){
            let updatedControls = page.controls.map(control => ({...control, isSelected: false}))
            updatedControls.push({...item.control, isSelected: true})
            return {...page, controls:updatedControls}
          } else{
            return page
          }
        })
        setPages(updatedPages)
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