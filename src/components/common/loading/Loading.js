import React from 'react'

import './Loading.css'

const Loading = (props) => {
  const { showSpinner } = props
  return (
    <div className={showSpinner ? 'overlay' : 'displayNone'}>
      <div class="lds-roller">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  )
}

export default Loading
