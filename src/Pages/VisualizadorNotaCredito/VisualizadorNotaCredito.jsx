import React, { useEffect, useState } from 'react'
import xmlJs from 'xml-js';
import { PDFViewer } from '@react-pdf/renderer';
import NotaCreditoPDF from '../../Components/NotaCreditoPDF/NotaCreditoPDF';
import './visualizadorNotaCredito.css'

function VisualizadorNotaCredito() {

    const [notaCredito, setNotaCredito] = useState()

    // Objeto:
    // bef89efd-0374-413a-b107-6ed656004b1b

    // Array:
    // 9ce797c0-5c31-4ae6-8dcb-b388c6b3a511

    // Sin infoadicional
    // c377b32c-92ad-4262-938f-e0b68f7528ec

    // Una infoadicional
    // 0caafdaf-ef65-4c17-b761-6bc644095264


    const getData = async () => {
        const response = await fetch('https://calero-app-back-b4f35bcf8e81.herokuapp.com/api/v1.0/recibidos/nota-credito/ABCD/AB01/c59b6f59-c124-43fa-8306-80807b00e72a');
        const data = await response.json();
        setNotaCredito(data.comprobante);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        notaCredito &&
        <PDFViewer className={'visualizadorPDF'}>
            <NotaCreditoPDF notaCredito={notaCredito} />
        </PDFViewer>
    )
}

export default VisualizadorNotaCredito