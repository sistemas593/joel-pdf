import React, { useEffect, useState } from 'react'
import xmlJs from 'xml-js';
import { PDFViewer } from '@react-pdf/renderer';
import FacturaPDF from '../../Components/FacturaPDF/FacturaPDF';
import './visualizadorFactura.css'

function VisualizadorFactura() {

    const [factura, setFactura] = useState()

    const getData = async () => {
        const response = await fetch('https://calero-app-back-b4f35bcf8e81.herokuapp.com/api/v1.0/recibidos/facturas/ABCD/AB01/bef89efd-0374-413a-b107-6ed656004b1b');
        const data = await response.json();
        const xmlPure = data.xml.slice(9).slice(0, -3);
        const xml = xmlJs.xml2json(xmlPure.toString(), { compact: true, spaces: 4 });
        console.log(JSON.parse(xml).factura);
        setFactura(JSON.parse(xml).factura);
        return JSON.parse(xml).factura;
    }

    useEffect(() => {
        getData()
    }, [])
  
    return (
    factura &&
    <PDFViewer className={'visualizadorPDF'}>
      <FacturaPDF factura={factura}/>
    </PDFViewer>
    )
}

export default VisualizadorFactura
