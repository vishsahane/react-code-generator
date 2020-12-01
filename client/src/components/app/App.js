
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Editor from '../editor/Editor'
import Preview from '../preview/Preview'
import './App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/editor">
          <Editor />
        </Route>
        <Route path="/preview">
          <Preview />
        </Route>
        <Route path="/">
          <Editor />
        </Route>
      </Switch>
    </Router>
  )
}

export default App