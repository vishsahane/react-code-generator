
import React from 'react'
import { useDrop } from 'react-dnd'

import './PageEditor.css'

const PageEditor = (props) => {
  const { selectedPage } = props
  console.log("selectedPage", selectedPage)
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
  const onControlSelection = (control, key) => {

    control.isSelected = true
  }

  return (
    <div className="section page-editor">
      <div className="title">Page Editor</div>
      <div className="content" ref={drop} >
        <ul>
          {selectedPage && selectedPage.controls.map((control, key) =>
            <li>
              <button
                className={'btn-dropped-control ' + (control.isSelected ? 'selected': '')}
                onClick={()=>{selectedPage.controls[key].isSelected=true}}>
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