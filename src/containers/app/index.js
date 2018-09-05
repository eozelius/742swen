import 'babel-polyfill'
import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home/home'
import Header from '../header'
import Story from '../story/story'
import 'bootstrap'

const App = () => (
  <div>
    <Header/ >
      
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/story/:id" component={Story} />
    </main>
  </div>
)

export default App
