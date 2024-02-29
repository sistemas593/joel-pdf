import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import VisualizadorFactura from './Pages/VisualizadorFactura/VisualizadorFactura'
import VisualizadorNotaCredito from './Pages/VisualizadorNotaCredito/VisualizadorNotaCredito'
import VisualizadorNotaDebito from './Pages/VisualizadorNotaDebito/VisualizadorNotaDebito'
import VisualizadorGuiaRemision from './Pages/VisualizadorGuiaRemision/VisualizadorGuiaRemision'
import VisualizadorComprobanteRetencion from './Pages/VisualizadorComprobanteRetencion/VisualizadorComprobanteRetencion'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VisualizadorFactura />} />
        <Route path="/nota-credito" element={<VisualizadorNotaCredito />} />
        <Route path="/nota-debito" element={<VisualizadorNotaDebito />} />
        <Route path="/guia-remision" element={<VisualizadorGuiaRemision />} />
        <Route path="/comprobante-retencion" element={<VisualizadorComprobanteRetencion/>} />
      </Routes>
    </>
  )
}

export default App
