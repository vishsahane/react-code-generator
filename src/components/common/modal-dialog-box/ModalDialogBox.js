import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import './ModalDialogBox.css'

const ModalDialogBox = props => {
  const { showModal, setShowModal, title, body, footer, size } = props
  const modalBodyRef = useRef(null)
  useEffect(() => {
    document.addEventListener("keydown", handleEscape, false)
    return () => {
      document.removeEventListener("keydown", handleEscape, false)
    }
  }, [])

  const handleEscape = event => {
    if (event.keyCode === 27) {
      setShowModal(false)
    }
  }

  return (<React.Fragment>
    <div className="modal" hidden={!showModal}>
      <div className={`modal-dialog modal-${size}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
            <button type="button" className="close" onClick={() => setShowModal(false)}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {body}
          </div>
          {footer && <div className="modal-footer">
            {footer}
          </div>}
        </div>
      </div>
    </div>
    <div className="modal-backdrop" hidden={!showModal}></div>
  </React.Fragment>)
}

ModalDialogBox.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node,
  size: PropTypes.string
}
ModalDialogBox.defaultProps = {
  size: 'md'
}
export default ModalDialogBox
