
import React from 'react'

import './PageExplorer.css'

const PageExplorer = (props) => {
  const { pages } = props
  return (
    <div className="section page-component-explorer">
      <div className="title">
        Page Component Explorer &nbsp;
        <button className="plus-btn"> + </button>
      </div>
      <div className="content">
        <ul>
          {pages.map(page =>
            <li className="page-title">{page.name}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default PageExplorer