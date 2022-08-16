import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from  './Components/Home'




export class App extends Component {
  render() {
    return (
      
      <BrowserRouter>

        <Routes>
          <Route exact path='/' component={Home} />
          
        </Routes> 
      </BrowserRouter>
    )
  }
}

export default App 