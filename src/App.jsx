import "./App.css"
import React from 'react'
import Header from "./Components/Header/Header"
import Content from "./Components/Content/Content"
import Footer from "./Components/Footer/Footer"
import {BrowserRouter,Routes,Route  } from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes >
      {/* <Route element={} path={"/"} > */}

      {/* </Route> */}
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
