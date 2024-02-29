import React, { useEffect, useState } from 'react'
import xmlJs from 'xml-js';
import { PDFViewer } from '@react-pdf/renderer';
import NotaDebitoPDF from '../../Components/NotaDebitoPDF/NotaDebitoPDF';
import './visualizadorNotaDebito.css'

function VisualizadorNotaDebito() {

    const [notaDebito, setNotaDebito] = useState()

    // Objeto:
    // bef89efd-0374-413a-b107-6ed656004b1b

    // Array:
    // 9ce797c0-5c31-4ae6-8dcb-b388c6b3a511

    // Sin infoadicional
    // c377b32c-92ad-4262-938f-e0b68f7528ec

    // Una infoadicional
    // 0caafdaf-ef65-4c17-b761-6bc644095264


    const getData = async () => {
        const response = await fetch('https://calero-app-back-b4f35bcf8e81.herokuapp.com/api/v1.0/recibidos/nota-debito/ABCD/AB01/aa00678b-02df-4f7a-9cb0-7e47b737adc2');
        const data = await response.json();
        setNotaDebito(data.comprobante);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        notaDebito &&
        <PDFViewer className={'visualizadorPDF'}>
            <NotaDebitoPDF notaDebito={notaDebito} />
        </PDFViewer>
    )
}

export default VisualizadorNotaDebito