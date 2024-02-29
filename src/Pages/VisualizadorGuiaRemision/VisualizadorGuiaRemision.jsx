import React, { useEffect, useState } from 'react'
import xmlJs from 'xml-js';
import { PDFViewer } from '@react-pdf/renderer';
import GuiaRemisionPDF from '../../Components/GuiaRemisionPDF/GuiaRemisionPDF';
import './visualizadorGuiaRemision.css'

function VisualizadorGuiaRemision() {

    const [guiaRemision, setGuiaRemision] = useState()

    // Objeto:
    // bef89efd-0374-413a-b107-6ed656004b1b

    // Array:
    // 9ce797c0-5c31-4ae6-8dcb-b388c6b3a511

    // Sin infoadicional
    // c377b32c-92ad-4262-938f-e0b68f7528ec

    // Una infoadicional
    // 0caafdaf-ef65-4c17-b761-6bc644095264


    const getData = async () => {
        const response = await fetch('https://calero-app-back-b4f35bcf8e81.herokuapp.com/api/v1.0/recibidos/facturas/ABCD/AB01/8976908e-cf15-4f6c-a8ca-cbe566bb1c01');
        const data = await response.json();
        const xmlPure = data.xml.slice(9).slice(0, -3);
        const xml = xmlJs.xml2json(xmlPure.toString(), { compact: true, spaces: 4 });
        console.log(JSON.parse(xml).guiaRemision);
        setGuiaRemision(JSON.parse(xml).guiaRemision);
        return JSON.parse(xml).guiaRemision;
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        guiaRemision &&
        <PDFViewer className={'visualizadorPDF'}>
            <GuiaRemisionPDF guiaRemision={guiaRemision} />
        </PDFViewer>
    )
}

export default VisualizadorGuiaRemision