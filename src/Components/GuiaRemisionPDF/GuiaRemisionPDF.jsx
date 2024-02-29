import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logoFactura from '../../assets/logoFactura.png'

function GuiaRemisionPDF({ guiaRemision }) {

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
            gap: 4,
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
            gap: 0,
            alignItems: 'start',
            justifyContent: 'start',
            backgroundColor: '#FFFFFF',
        },
        productoTable: {
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            borderTop: '1px solid #000000'
        },
        lastProductoTable: {
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            borderTop: '1px solid #000000',
            borderBottom: '1px solid #000000'
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
            title: 'Tarjeta de credito',
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
                            <Text style={{ fontSize: 10, textAlign: 'center', textTransform: 'uppercase' }}>{guiaRemision.infoTributaria?.razonSocial?._text}</Text>
                            <Text style={{ fontSize: 8, textAlign: 'center', textTransform: 'uppercase', color: '#00000060', marginTop: 2 }}>{guiaRemision.infoTributaria?.nombreComercial?._text}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 8, justifyContent: 'start', gap: 12, width: '100%', maxWidth: '100%' }}>
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                                    <Text style={{ fontSize: 8 }}>Dirección</Text>
                                    <Text style={{ fontSize: 8 }}>Matriz:</Text>
                                </View>
                                <View style={{ width: 180, paddingRight: 4 }}>
                                    <Text style={{ fontSize: 8, maxWidth: 180, paddingRight: 4, textWrap: 'wrap' }}>{guiaRemision.infoTributaria?.dirMatriz?._text}</Text>
                                </View>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 6, justifyContent: 'start', gap: 12, width: '100%', maxWidth: '100%' }}>
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                                    <Text style={{ fontSize: 8 }}>Dirección</Text>
                                    <Text style={{ fontSize: 8 }}>Sucursal:</Text>
                                </View>
                                <View style={{ width: 180, paddingRight: 4 }}>
                                    <Text style={{ fontSize: 8, maxWidth: 180, paddingRight: 4, textWrap: 'wrap' }}>{guiaRemision.infoGuiaRemision?.dirEstablecimiento?._text}</Text>
                                </View>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 6, justifyContent: 'start', gap: 12, width: '100%' }}>
                                <Text style={{ fontSize: 8 }}>OBLIGADO A LLEVAR CONTABILIDAD:</Text>
                                <Text style={{ fontSize: 8 }}>{guiaRemision.infoGuiaRemision?.obligadoContabilidad?._text}</Text>
                            </View>
                            <View style={{ marginTop: 6 }}>
                                <Text style={{ fontSize: 8 }}>{guiaRemision.infoTributaria?.contribuyenteRimpe?._text}</Text>
                            </View>
                        </View>
                    </View>
                    {/* texto de la arriba a la derecha */}
                    <View style={styles.textTopRight}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                            <Text style={{ fontSize: 8 }}>R.U.C:</Text>
                            <Text style={{ fontSize: 8 }}>{guiaRemision.infoTributaria?.ruc?._text}</Text>
                        </View>
                        <View style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <Text style={{ fontSize: 8 }}>
                                {guiaRemision.infoTributaria?.codDoc?._text === '01' && 'FACTURA'}
                                {guiaRemision.infoTributaria?.codDoc?._text === '04' && 'NOTA DE CRÉDITO'}
                                {guiaRemision.infoTributaria?.codDoc?._text === '05' && 'NOTA DE DÉBITO'}
                                {guiaRemision.infoTributaria?.codDoc?._text === '06' && 'GUÍA DE REMISIÓN'}
                            </Text>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                                <Text style={{ fontSize: 8 }}>No.</Text>
                                <Text style={{ fontSize: 8 }}>
                                    {guiaRemision.infoTributaria?.estab?._text}-{guiaRemision.infoTributaria?.ptoEmi?._text}-{guiaRemision.infoTributaria?.secuencial?._text}
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <Text style={{ fontSize: 8 }}>NUMERO DE AUTORIZACIÓN</Text>
                            <Text style={{ fontSize: 8 }}>{guiaRemision.infoTributaria?.claveAcceso?._text}</Text>
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
                                {guiaRemision.infoTributaria?.ambiente?._text === '1' && 'PRUEBAS'}
                                {guiaRemision.infoTributaria?.ambiente?._text === '2' && 'PRODUCCIÓN'}
                            </Text>
                        </View>
                        <View style={{ marginTop: 14, display: 'flex', flexDirection: 'row', gap: 17 }}>
                            <Text style={{ fontSize: 8 }}>EMISIÓN:</Text>
                            <Text style={{ fontSize: 8 }}>
                                {guiaRemision.infoTributaria?.tipoEmision?._text === '1' && 'NORMAL'}
                            </Text>
                        </View>
                        <View style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <Text style={{ fontSize: 8 }}>CLAVE DE ACCESO</Text>
                            <Text style={{ fontSize: 8 }}>{guiaRemision.infoTributaria?.claveAcceso?._text}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.middleSection}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
                        <Text style={{ fontSize: 8 }}>IDENTIFICACIÓN (TRANSPORTISTA)</Text>
                        <Text style={{ fontSize: 8 }}>{guiaRemision.infoGuiaRemision?.identificacionComprador?._text}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <Text style={{ fontSize: 8, width: 220 }}>RAZÓN SOCIAL / NOMBRES Y APELLIDOS:</Text>
                        <Text style={{ fontSize: 8, textTransform: 'uppercase', width: 420 }}>{guiaRemision.infoGuiaRemision?.razonSocialComprador?._text}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <Text style={{ fontSize: 8, width: 75 }}>PLACA:</Text>
                        <Text style={{ fontSize: 8, textTransform: 'uppercase', width: 420 }}>{guiaRemision.infoGuiaRemision?.direccionComprador?._text}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <Text style={{ fontSize: 8, width: 220 }}>PUNTO DE PARTIDA:</Text>
                        <Text style={{ fontSize: 8, textTransform: 'uppercase', width: 420 }}>{guiaRemision.infoGuiaRemision?.razonSocialComprador?._text}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', width: '100%', gap: 32 }}>


                        <View style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
                            <Text style={{ fontSize: 8 }}>FECHA DE INICIO:</Text>
                            <Text style={{ fontSize: 8 }}>{guiaRemision.infoGuiaRemision?.fechaEmision?._text}</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
                            <Text style={{ fontSize: 8 }}>FECHA FIN TRANSPORTE:</Text>
                            <Text style={{ fontSize: 8 }}>{guiaRemision.infoGuiaRemision?.guiaRemision?._text}</Text>
                        </View>
                    </View>
                </View>
                {/* Tabla */}
                <View style={styles.tableBody}>
                    {/* Header tabla */}
                    <View style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', borderTop: '1px solid #000000' }}>
                        <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 150, borderLeft: '1px solid #000000' }}>
                            <Text style={{ fontSize: 8 }}>Código</Text>
                        </View>
                        <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', flexGrow: 1, width: '100%', maxWidth: '100%', borderLeft: '1px solid #000000' }}>
                            <Text style={{ fontSize: 8 }}>Descripción</Text>
                        </View>
                        <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 100, borderLeft: '1px solid #000000' }}>
                            <Text style={{ fontSize: 8 }}>Cantidad</Text>
                        </View>
                        <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 100, borderLeft: '1px solid #000000' }}>
                            <Text style={{ fontSize: 8 }}>Precio Unitario</Text>
                        </View>
                        <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 100, borderLeft: '1px solid #000000' }}>
                            <Text style={{ fontSize: 8 }}>Descuento</Text>
                        </View>
                        <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 150, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                            <Text style={{ fontSize: 8 }}>Precio Total</Text>
                        </View>
                    </View>
                    {/* Productos */}
                    {
                        guiaRemision.detalles?.detalle?.length > 1 ?

                            guiaRemision.detalles?.detalle?.map((producto, index) => (
                                <View style={index + 1 === guiaRemision.detalles?.detalle?.length ? styles.lastProductoTable : styles.productoTable} key={producto.codigoPrincipal._text}>
                                    <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 150, borderLeft: '1px solid #000000' }}>
                                        <Text style={{ fontSize: 8 }}>{producto.codigoPrincipal._text}</Text>
                                    </View>
                                    <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', flexGrow: 1, width: '100%', maxWidth: '100%', borderLeft: '1px solid #000000' }}>
                                        <Text style={{ fontSize: 8 }}>{producto.descripcion._text}</Text>
                                    </View>
                                    <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 100, borderLeft: '1px solid #000000' }}>
                                        <Text style={{ fontSize: 8 }}>{parseInt(producto.cantidad._text)}</Text>
                                    </View>
                                    <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 100, borderLeft: '1px solid #000000' }}>
                                        <Text style={{ fontSize: 8 }}>{parseFloat(producto.precioUnitario._text).toFixed(2)}</Text>
                                    </View>
                                    <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 100, borderLeft: '1px solid #000000' }}>
                                        <Text style={{ fontSize: 8 }}>{parseFloat(producto.descuento._text).toFixed(2)}</Text>
                                    </View>
                                    <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 150, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                        <Text style={{ fontSize: 8 }}>{parseFloat(producto.precioTotalSinImpuesto._text).toFixed(2)}</Text>
                                    </View>
                                </View>
                            ))
                            :
                            <View style={styles.lastProductoTable}>
                                <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 150, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{guiaRemision.detalles?.detalle?.codigoPrincipal._text}</Text>
                                </View>
                                <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', flexGrow: 1, width: '100%', maxWidth: '100%', borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{guiaRemision.detalles?.detalle?.descripcion._text}</Text>
                                </View>
                                <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 100, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{parseInt(guiaRemision.detalles?.detalle?.cantidad._text)}</Text>
                                </View>
                                <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 100, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{parseFloat(guiaRemision.detalles?.detalle?.precioUnitario._text).toFixed(2)}</Text>
                                </View>
                                <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 100, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{parseFloat(guiaRemision.detalles?.detalle?.descuento._text).toFixed(2)}</Text>
                                </View>
                                <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 150, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{parseFloat(guiaRemision.detalles?.detalle?.precioTotalSinImpuesto._text).toFixed(2)}</Text>
                                </View>
                            </View>
                    }
                </View>
                {/* Footer */}
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'start', width: '100%' }}>
                    <View style={{ flexGrow: 1, paddingTop: 4, paddingRight: 4, display: 'flex', flexDirection: 'column' }}>
                        <View style={{ width: '100%', border: '1px solid #000000' }}>
                            <View style={{ width: '100%', padding: 4 }}>
                                <Text style={{ fontSize: 8, marginLeft: 8 }}>INFORMACIÓN ADICIONAL</Text>
                            </View>
                            {
                                guiaRemision.infoAdicional?.campoAdicional &&
                                <View style={{ borderTop: '1px solid #000000' }}>
                                    {
                                        guiaRemision.infoAdicional?.campoAdicional?.length > 1 ?
                                            guiaRemision.infoAdicional?.campoAdicional?.map(dato => (
                                                <View style={{ display: 'flex', flexDirection: 'row', width: 270, gap: 8, paddingTop: 1, paddingBottom: 1, paddingLeft: 2, paddingRight: 2 }} key={dato._attributes.nombre}>
                                                    <Text style={{ fontSize: 8 }}>{dato._attributes.nombre}:</Text>
                                                    <Text style={{ fontSize: 8 }}>{dato._text}</Text>
                                                </View>
                                            ))
                                            :
                                            <View style={{ display: 'flex', flexDirection: 'row', width: 270, gap: 8, paddingTop: 1, paddingBottom: 1, paddingLeft: 2, paddingRight: 2 }}>
                                                <Text style={{ fontSize: 8 }}>{guiaRemision.infoAdicional?.campoAdicional?._attributes.nombre}:</Text>
                                                <Text style={{ fontSize: 8 }}>{guiaRemision.infoAdicional?.campoAdicional?._text}</Text>
                                            </View>
                                    }
                                </View>

                            }
                        </View>


                        <View style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: 4 }}>
                            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', borderTop: '1px solid #000000' }}>
                                <View style={{ width: '55%', padding: 4, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>Forma de Pago</Text>
                                </View>
                                <View style={{ width: '15%', padding: 4, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>Valor</Text>
                                </View>
                                <View style={{ width: '15%', padding: 4, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>Plazo</Text>
                                </View>
                                <View style={{ width: '15%', padding: 4, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>Tiempo</Text>
                                </View>
                            </View>
                            {
                                formasDePago.map((forma, index) => (
                                    <View style={index + 1 === formasDePago.length ? styles.lastFilaFormaPago : styles.filaFormaPago} key={forma.title}>
                                        <View style={{ width: '55%', padding: 4, borderLeft: '1px solid #000000' }}>
                                            <Text style={{ fontSize: 8, width: '70%' }}>{forma.title}</Text>
                                        </View>
                                        <View style={{ width: '15%', padding: 4, borderLeft: '1px solid #000000' }}>
                                            <Text style={{ fontSize: 8 }}>{forma.value}</Text>
                                        </View>
                                        <View style={{ width: '15%', padding: 4, borderLeft: '1px solid #000000' }}>
                                            <Text style={{ fontSize: 8 }}>{forma.plazo}</Text>
                                        </View>
                                        <View style={{ width: '15%', padding: 4, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                            <Text style={{ fontSize: 8 }}>{forma.tiempo}</Text>
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

export default GuiaRemisionPDF