import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import VisualizadorFactura from './Pages/VisualizadorFactura/VisualizadorFactura'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VisualizadorFactura />} />
      </Routes>
    </>
  )
}

export default App
