
import React, { useState } from 'react'

import { ModalDialogBox } from '../common'

const AddPage = (props) => {
  const { pages, setPages, setSelectedPath, setShowModal } = props
  const [pageTitle, setPageTitle] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(false)
    console.log("pageTitle", pageTitle)
    let updatedPages = [...pages]
    updatedPages.push({ name: pageTitle, controls: [] })
    setPages(updatedPages)
    setSelectedPath((updatedPages.length -1).toString())
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <ModalDialogBox title="Add Page" showModal={true} setShowModal={setShowModal}
        body={
          <div>
            <input type="text" className="standard-input" placeholder="Enter page title"
              onChange={e => setPageTitle(e.target.value)} autoFocus/>
          </div>
        }
        footer={<React.Fragment>
          <button type="button" className="secondary-btn code-btn"
            onClick={() => setShowModal(false)}>Cancel</button>
          <button type="submit" className="standard-btn code-btn" disabled={!pageTitle}>
            Save</button>
        </React.Fragment>} />
    </form>
  )
}

export default AddPage
