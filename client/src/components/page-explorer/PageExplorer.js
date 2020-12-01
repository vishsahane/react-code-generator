
import React, { useState } from 'react'

import './PageExplorer.css'
import AddPage from './AddPage'

const PageExplorer = (props) => {
  const { pages, setPages, selectedPath, setSelectedPath } = props
  const [showAddPage, setShowAddPage] = useState(false)

  //console.log("pageExplorer", selectedPath, selectedPath.charAt(0))
  const onPageSelection = (pageIndex) => {
    setSelectedPath(pageIndex.toString())
  }
  return (
    <div className="section page-component-explorer">
      <div className="title">
        Page Component Explorer &nbsp;
        <button className="plus-btn" onClick={() => setShowAddPage(true)}> + </button>
      </div>
      <div className="content">
        <ul>
          {pages.map((page, pageIndex) =>
            <li key={pageIndex}>
              <button className={`page-title-btn ` + (selectedPath.charAt(0) == pageIndex ? 'selected' : '')}
                onClick={() => onPageSelection(pageIndex)}>
                {page.name}
              </button>
            </li>
          )}
        </ul>
      </div>
      {showAddPage && <AddPage setShowModal={setShowAddPage} pages={pages}
        setPages={setPages} setSelectedPath={setSelectedPath} />}
    </div>
  )
}

export default PageExplorer
