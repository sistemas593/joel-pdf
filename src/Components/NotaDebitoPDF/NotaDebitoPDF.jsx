import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logoFactura from '../../assets/logoFactura.png'

function NotaDebitoPDF({ notaDebito }) {

    const styles = StyleSheet.create({
        page: {
            padding: 48,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#FFFFFF',
        },
        topSection: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'start',
            backgroundColor: '#FFFFFF',
            width: '100%'
        },
        sectionTopLeft: {
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF'
        },
        textTopLeft: {
            width: '100%',
            border: '1px solid #000000',
            borderRadius: 4,
            padding: 4,
        },
        textTopRight: {
            width: '50%',
            border: '1px solid #000000',
            borderRadius: 4,
            padding: 4,
            marginLeft: 4,
        },
        middleSection: {
            width: '100%',
            border: '1px solid #000000',
            borderRadius: 4,
            padding: 4,
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            alignItems: 'start',
            justifyContent: 'start',
            backgroundColor: '#FFFFFF'
        },
        tableBody: {
            width: '100%',
            marginTop: 2,
            borderRadius: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'start',
            justifyContent: 'start',
            backgroundColor: '#FFFFFF',
        },
        motivoTable: {
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            borderTop: '1px solid #000000'
        },
        lastMotivoTable: {
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            borderTop: '1px solid #000000',
            borderBottom: '1px solid #000000'
        },
        lasttMotivoTable: {
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
        },
        filaFooter: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            borderTop: '1px solid #000000'
        },
        firstFilaFooter: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
        },
        lastFilaFooter: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            borderTop: '1px solid #000000',
            borderBottom: '1px solid #000000'
        },
        filaFormaPago: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            borderTop: '1px solid #000000'
        },
        lastFilaFormaPago: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            borderTop: '1px solid #000000',
            borderBottom: '1px solid #000000'
        }
    });

    const productos = [
        {
            codigo: '01',
            descripcion: 'Computadora',
            cantidad: 5,
            precio: 500,
            descuento: 50,
            total: 100.2094292
        },
        {
            codigo: '02',
            descripcion: 'Mateo Mateo Mateo Mateo Mateo Mateo Mateo Mateo Mateo Mateo Mateo Mateo Mateo Mateo',
            cantidad: 5,
            precio: 500,
            descuento: 50,
            total: 100.2094292
        },
        {
            codigo: '03',
            descripcion: 'Computadora',
            cantidad: 5,
            precio: 500,
            descuento: 50,
            total: 100.2094292
        },
    ]

    const totales = [
        {
            title: 'SUBTOTAL 12%',
            value: 0,
            optional: false
        },
        {
            title: 'SUBTOTAL 0%',
            value: 10,
            optional: false
        },
        {
            title: 'SUBTOTAL no objeto de IVA',
            value: 0,
            optional: true
        },
        {
            title: 'SUBTOTAL exento de IVA',
            value: 0,
            optional: true
        },
        {
            title: 'SUBTOTAL SIN IMPUESTOS',
            value: 10,
            optional: false
        },
        {
            title: 'TOTAL descuento',
            value: 10,
            optional: false
        },
        {
            title: 'IVA 12%',
            value: 10,
            optional: false
        },
        {
            title: 'VALOR TOTAL',
            value: 10,
            optional: false
        },
    ]

    const informacionAdicional = [
        {
            title: 'Dirección',
            value: ' PINTA E4-432 Y AV. AMAZONAS'
        },
        {
            title: 'Teléfono',
            value: '123123123123'
        },
    ]

    const formasDePago = [
        {
            title: 'SIN UTILIZACION DEL SISTEMA FINANCIERO',
            value: '65',
            plazo: '1',
            tiempo: 'Días'
        },
        {
            title: 'Tarjeta de Debito',
            value: '65',
            plazo: '1',
            tiempo: 'Días'
        }
    ]

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.topSection}>
                    {/* texto de la arriba a la izquierda */}
                    <View style={styles.sectionTopLeft}>
                        {/* logo */}
                        <View style={{ textAlign: 'center', width: '100%' }}>
                            <Image src={logoFactura} style={{ width: '100%', objectFit: 'contain' }} />
                        </View>
                        <View style={styles.textTopLeft}>
                            <Text style={{ fontSize: 10, textAlign: 'center', textTransform: 'uppercase' }}>{notaDebito.infoTributaria?.razonSocial}</Text>
                            <Text style={{ fontSize: 8, textAlign: 'center', textTransform: 'uppercase', color: '#00000060', marginTop: 2 }}>{notaDebito.infoTributaria?.nombreComercial}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginRight: 10,marginTop: 8, justifyContent: 'start', gap: 12, width: '100%', maxWidth: '100%' }}>
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                                    <Text style={{ fontSize: 8 }}>Dirección</Text>
                                    <Text style={{ fontSize: 8 }}>Matriz:</Text>
                                </View>
                                <View style={{ width: 180, paddingRight: 4 }}>
                                    <Text style={{ fontSize: 8, maxWidth: 180, paddingRight: 4, textWrap: 'wrap' }}>{notaDebito.infoTributaria?.dirMatriz}</Text>
                                </View>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 6, justifyContent: 'start', gap: 12, width: '100%', maxWidth: '100%' }}>
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                                    <Text style={{ fontSize: 8 }}>Dirección</Text>
                                    <Text style={{ fontSize: 8 }}>Sucursal:</Text>
                                </View>
                                <View style={{ width: 180, paddingRight: 4 }}>
                                    <Text style={{ fontSize: 8, maxWidth: 180, paddingRight: 4, textWrap: 'wrap' }}>{notaDebito.infoNotaDebito?.dirEstablecimiento}</Text>
                                </View>
                            </View>
                            <View style={{marginTop: 6}}>
                                <Text style={{fontSize: 8}}>Contribuyente especial Nro. 490509</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 6, justifyContent: 'start', gap: 12, width: '100%' }}>
                                <Text style={{ fontSize: 8 }}>OBLIGADO A LLEVAR CONTABILIDAD:</Text>
                                <Text style={{ fontSize: 8 }}>{notaDebito.infoNotaDebito?.obligadoContabilidad}</Text>
                            </View>
                            <View style={{ marginTop: 6 }}>
                                <Text style={{ fontSize: 8 }}>{notaDebito.infoTributaria?.contribuyenteRimpe}</Text>
                            </View>
                        </View>
                    </View>
                    {/* texto de la arriba a la derecha */}
                    <View style={styles.textTopRight}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                            <Text style={{ fontSize: 8 }}>R.U.C:</Text>
                            <Text style={{ fontSize: 8 }}>{notaDebito.infoTributaria?.ruc}</Text>
                        </View>
                        <View style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>

                            <Text style={{ fontSize: 8 }}>

                                {notaDebito.infoNotaDebito?.codDocModificado === '01' && 'FACTURA'}
                                {notaDebito.infoNotaDebito?.codDocModificado === '04' && 'NOTA DE CRÉDITO'}
                                {notaDebito.infoNotaDebito?.codDocModificado === '05' && 'NOTA DE DÉBITO'}
                                {notaDebito.infoNotaDebito?.codDocModificado === '06' && 'GUÍA DE REMISIÓN'}
                            </Text>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                                <Text style={{ fontSize: 8 }}>No.</Text>
                                <Text style={{ fontSize: 8 }}>
                                    {notaDebito.infoTributaria?.estab}-{notaDebito.infoTributaria?.ptoEmi}-{notaDebito.infoTributaria?.secuencial}
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <Text style={{ fontSize: 8 }}>NUMERO DE AUTORIZACIÓN</Text>
                            <Text style={{ fontSize: 8 }}>{notaDebito.infoTributaria?.claveAcceso}</Text>
                        </View>
                        <View style={{ marginTop: 14, display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', gap: 6 }}>
                            <View style={{ width: 80 }}>
                                <Text style={{ fontSize: 8, width: '100%' }}>FECHA Y HORA DE AUTORIZACIÓN</Text>
                            </View>
                            <Text style={{ fontSize: 7 }}>2023-11-01T16:21:34-05:00</Text>
                        </View>
                        <View style={{ marginTop: 14, display: 'flex', flexDirection: 'row', gap: 8 }}>
                            <Text style={{ fontSize: 8 }}>AMBIENTE.:</Text>
                            <Text style={{ fontSize: 8 }}>
                                {notaDebito.infoTributaria?.ambiente === '1' && 'PRUEBAS'}
                                {notaDebito.infoTributaria?.ambiente === '2' && 'PRODUCCIÓN'}
                            </Text>
                        </View>
                        <View style={{ marginTop: 14, display: 'flex', flexDirection: 'row', gap: 17 }}>
                            <Text style={{ fontSize: 8 }}>EMISIÓN:</Text>
                            <Text style={{ fontSize: 8 }}>
                                {notaDebito.infoTributaria?.tipoEmision === '1' && 'NORMAL'}
                            </Text>
                        </View>
                        <View style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <Text style={{ fontSize: 8 }}>CLAVE DE ACCESO</Text>
                            <Text style={{ fontSize: 8 }}>{notaDebito.infoTributaria?.claveAcceso}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.middleSection}>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <Text style={{ fontSize: 8, width: 220 }}>RAZÓN SOCIAL / NOMBRES Y APELLIDOS:</Text>
                        <Text style={{ fontSize: 8, textTransform: 'uppercase', width: 420 }}>{notaDebito.infoNotaDebito?.razonSocialComprador}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', width: '100%', gap: 32 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
                            <Text style={{ fontSize: 8 }}>IDENTIFICACIÓN:</Text>
                            <Text style={{ fontSize: 8 }}>{notaDebito.infoNotaDebito?.identificacionComprador}</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', width: '100%', gap: 32 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
                            <Text style={{ fontSize: 8 }}>FECHA DE EMISIÓN:</Text>
                            <Text style={{ fontSize: 8 }}>{notaDebito.infoNotaDebito?.fechaEmision}</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', borderTop: '1px solid #000000' }}>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <Text style={{ fontSize: 8, width: 175 }}>COMPROBANTE QUE SE MODIFICA:</Text>
                        <Text style={{ fontSize: 8, textTransform: 'uppercase', width: 420 }}>
                            {notaDebito.infoNotaDebito?.codDocModificado === '01' && 'FACTURA'}
                            {notaDebito.infoNotaDebito?.codDocModificado === '04' && 'NOTA DE CRÉDITO'}
                            {notaDebito.infoNotaDebito?.codDocModificado === '05' && 'NOTA DE DÉBITO'}
                            {notaDebito.infoNotaDebito?.codDocModificado === '06' && 'GUÍA DE REMISIÓN'}: {notaDebito.infoNotaDebito?.numDocModificado}
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <Text style={{ fontSize: 8, width: 280 }}>FECHA EMISIÓN (COMPROBANTE A MODIFICAR):</Text>
                        <Text style={{ fontSize: 8, textTransform: 'uppercase', width: 420 }}>{notaDebito.infoNotaDebito?.fechaEmisionDocSustento}</Text>
                    </View>
                </View>
                {/* Tabla */}
                <View style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: 4 }}>
                    <View style={{ width: '100%', display: 'flex', flexDirection: 'row', borderTop: '1px solid #000000' }}>
                        <View style={{ paddingVertical: 10, textAlign: 'center', padding:10, width: '68%', borderLeft: '1px solid #000000' }}>
                            <Text style={{ fontSize: 8 ,}}>RAZÓN DE MODIFICACIÓN</Text>
                        </View>
                        <View style={{ paddingVertical: 10, textAlign: 'center', padding:10, width: '32%', borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                            <Text style={{ fontSize: 8 }}>VALOR DE LA MODIFICACIÓN</Text>
                        </View>

                    </View>



                    <View style={{ width: '100%', display: 'flex', flexDirection: 'row', borderBottom: '1px solid #000000', borderTop: '1px solid #000000' }}>
                        <View style={{ width: '68%', padding: 4, borderLeft: '1px solid #000000' }}>
                            <Text style={{ fontSize: 8 }}>{notaDebito.motivo?.razon}</Text>
                        </View>
                        <View style={{ width: '32%', padding: 4, textAlign:'right', borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                            <Text style={{ fontSize: 8 }}>{notaDebito.motivo?.valor}</Text>
                        </View>

                    </View>
                             

                </View>
                {/* Footer */}
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'start', width: '100%' }}>
                    <View style={{ flexGrow: 1, paddingTop: 4, paddingRight: 4, display: 'flex', flexDirection: 'column' }}>
                        <View style={styles.lasttMotivoTable}>
                            <View style={{ width: '75%', padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 85 }}>
                            </View>
                            <View style={{ width: '25%', padding: 7, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', width: '90%' }}>
                            </View>
                        </View>

                        <View style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: 4 }}>
                            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', borderTop: '1px solid #000000' }}>
                                <View style={{ width: '75%', padding: 4, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>Forma de Pago</Text>
                                </View>
                                <View style={{ width: '25%', padding: 4, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>Valor</Text>
                                </View>

                            </View>
                            {
                                formasDePago.map((forma, index) => (
                                    <View style={index + 1 === formasDePago.length ? styles.lastFilaFormaPago : styles.filaFormaPago} key={forma.title}>
                                        <View style={{ width: '75%', padding: 4, borderLeft: '1px solid #000000' }}>
                                            <Text style={{ fontSize: 8, width: '70%' }}>{forma.title}</Text>
                                        </View>
                                        <View style={{ width: '25%', padding: 4, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                            <Text style={{ fontSize: 8 }}>{forma.value}</Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'stretch', width: 'auto' }}>
                        {
                            totales.map((total, index) => (
                                total.value === 0 && total.optional ?
                                    <React.Fragment key={total.title}></React.Fragment>
                                    :
                                    <View style={index === 0 ? styles.firstFilaFooter : index + 1 === totales.length ? styles.lastFilaFooter : styles.filaFooter} key={total.title}>
                                        <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', width: 142.7, borderLeft: '1px solid #000000' }}>
                                            <Text style={{ fontSize: 5 }}>{total.title}</Text>
                                        </View>
                                        <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 107, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                            <Text style={{ fontSize: 8 }}>{total.value}</Text>
                                        </View>
                                    </View>
                            ))
                        }
                    </View>

                </View>




            </Page>
        </Document>
    )
}

export default NotaDebitoPDF