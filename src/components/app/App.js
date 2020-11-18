
import React, { useState } from 'react'

import './App.css'
import { CONTROLS } from '../../constants/controls'
import PageExplorer from'../page-explorer/PageExplorer'
import UIComponents from'../ui-components/UIComponents'
import PageEditor from'../page-editor/PageEditor'
import ComponentProperties from'../component-properties/ComponentProperties'

const App = () => {
  const initialPages = [
    { name: 'Test Component 1', isSelected:true, controls:[{label:'Button', isSelected:true}]},
    { name: 'Test Component 2', isSelected:false, controls:[{label:'Label', isSelected:true}]}
  ]
  const [pages, setPages] = useState(initialPages)
  const [selectedPage, setselectedPage] = useState(initialPages[0])

  const onControlDrop = (item, dropResult) =>{
    const updatedPage = {...selectedPage,
      controls: selectedPage.controls.map(control => ({...control, isSelected: false}))
    }
    updatedPage.controls.push({...item.control, isSelected: true})
    
    console.log("onControlDrop", item, dropResult, updatedPage)
    setselectedPage(updatedPage)
    // const updatedPages = pages.map((page, index) => {
    //   if(index === activePageIndex){
    //     page.controls.push(item.control)
    //   }
    //   return page
    // })
  }
  return (
    <div className="container">
      <div className="flex">
        <div className="col-1">
          <PageExplorer pages={pages}/>
          <UIComponents onControlDrop={onControlDrop}/>
        </div>
        <div className="col-2">
          <PageEditor selectedPage={selectedPage}/>
        </div>
        <div className="col-3">
          <ComponentProperties/>
        </div>
      </div>
    </div>
  )
}

export default App