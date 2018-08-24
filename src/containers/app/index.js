import 'babel-polyfill'
import React from 'react'
import { Route } from 'react-router-dom'
import Feed from '../feed/feed'
import Header from '../header'
import Story from '../story/story'
import 'bootstrap'

const App = () => (
  <div>
    <Header/ >
      
    <main>
      <Route exact path="/" component={Feed} />
      <Route exact path="/story/:id" component={Story} />
    </main>
  </div>
)

export default App
