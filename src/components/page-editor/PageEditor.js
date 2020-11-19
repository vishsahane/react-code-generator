
import React from 'react'
import { useDrop } from 'react-dnd'

import './PageEditor.css'

const PageEditor = (props) => {
  const { pages, setPages } = props
  let selectedPage = pages.find(page => page.isSelected)
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
  const onControlSelection = (controlIndex) => {
    const updatedPages = pages.map((page) => {
      if(page.isSelected){
        let updatedControls = page.controls.map((control,index) => ({...control, isSelected: (controlIndex === index)}))
        return {...page, controls:updatedControls}
      } else{
        return page
      }
    })
    console.log("updatedPages", updatedPages,controlIndex)
    setPages(updatedPages)
  }

  return (
    <div className="section page-editor">
      <div className="title">Page Editor</div>
      <div className="content" ref={drop} >
        <ul>
          {selectedPage && selectedPage.controls.map((control, controlIndex) =>
            <li key={controlIndex}>
              <button
                className={'btn-dropped-control ' + (control.isSelected ? 'selected': '')}
                onClick={()=>{onControlSelection(controlIndex)}}>
                {control.label}
              </button>
            </li>
          )}
        </ul>
        {isActive ? 'Release to drop component' : 'Drag UI Component here...'}
      </div>
    </div>
  )
}

export default PageEditor