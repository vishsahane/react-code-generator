
import React from 'react'

import './PageExplorer.css'

const PageExplorer = (props) => {
  const { pages, selectedPath, setSelectedPath} = props
  console.log("pageExplorer",selectedPath , selectedPath.charAt(0))
  const onPageSelection = (pageIndex) => {
    setSelectedPath(pageIndex.toString())
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
              <button className={`page-title-btn `+ (selectedPath.charAt(0) == pageIndex? 'selected': '')}
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