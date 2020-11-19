
import React from 'react'

import './PageExplorer.css'

const PageExplorer = (props) => {
  const { pages, setPages } = props
  const onPageSelection = (pageIndex) => {
    let updatedPages = pages.map((page,index) => {
      return {...page, isSelected: (pageIndex === index)}
    })
    console.log("updatedPages", updatedPages, pageIndex)
    setPages(updatedPages)
  }
  return (
    <div className="section page-component-explorer">
      <div className="title">
        Page Component Explorer &nbsp;
        <button className="plus-btn"> + </button>
      </div>
      <div className="content">
        <ul>
          {pages.map((page,pageIndex)=>
            <li key={pageIndex}>
              <button className={`page-title-btn `+ (page.isSelected? 'selected': '')}
              onClick={()=> onPageSelection(pageIndex)}>
                {page.name}
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default PageExplorer