import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'

import {
  BrowserRouter,
  Routes,
  Link,
  Route
} from 'react-router-dom'

import {
  Description,
  Point,
  Home,
  Measurement,
  Page1,
  Page2
} from "./pages"

import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Nav 
          variant="pills"
         defaultActiveKey="/"
         >
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="Award">
              <Link to="/page1">Award</Link> 
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
           <Nav.Link eventKey="Ballout">
              <Link to="/page2">Ballout</Link> 
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/measurement" element={<Measurement/>}/>
        <Route path="/description" element={<Description/>}/>
        <Route path="/point" element={<Point/>}/>
        <Route path="/page1" element={<Page1/>}/>
        <Route path="/page2" element={<Page2/>}/>

      </Routes>

    </BrowserRouter>
    </Provider>
    
  )
}

export default App



