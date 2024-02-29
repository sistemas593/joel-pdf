import React, { useEffect, useState } from 'react'
import xmlJs from 'xml-js';
import { PDFViewer } from '@react-pdf/renderer';
import ComprobanteRetencionPDF from '../../Components/ComprobanteRetencionPDF/ComprobanteRetencionPDF';
import './visualizadorComprobanteRetencion.css'

function VisualizadorComprobanteRetencion() {

    const [comprobanteRetencion, setComprobanteRetencion] = useState()

    // Objeto:
    // bef89efd-0374-413a-b107-6ed656004b1b

    // Array:
    // 9ce797c0-5c31-4ae6-8dcb-b388c6b3a511

    // Sin infoadicional
    // c377b32c-92ad-4262-938f-e0b68f7528ec

    // Una infoadicional
    // 0caafdaf-ef65-4c17-b761-6bc644095264


    const getData = async () => {
        const response = await fetch('https://calero-app-back-b4f35bcf8e81.herokuapp.com/api/v1.0/recibidos/comprobante-retencion/ABCD/AB01/6794bebe-fb60-453d-a638-489541e81239');
        const data = await response.json();
        setComprobanteRetencion(data.comprobante);
   
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        comprobanteRetencion &&
        <PDFViewer className={'visualizadorPDF'}>
            <ComprobanteRetencionPDF comprobanteRetencion={comprobanteRetencion} />
        </PDFViewer>
    )
}

export default VisualizadorComprobanteRetencion