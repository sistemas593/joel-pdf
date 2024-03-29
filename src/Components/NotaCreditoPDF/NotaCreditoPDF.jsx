import React, { useEffect, useState } from 'react'
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logoFactura from '../../assets/logoFactura.png'

function NotaCreditoPDF({ notaCredito }) {

    
    const [subtotal, setSubtotal] = useState(parseFloat(0).toFixed(2))
    const [descuento, setDescuento] = useState(parseFloat(0).toFixed(2))
    const [baseCero, setBaseCero] = useState(parseFloat(0).toFixed(2))
    const [baseGravada, setBaseGravada] = useState(parseFloat(0).toFixed(2))
    const [baseNoObjeto, setBaseNoObjeto] = useState(parseFloat(0).toFixed(2))
    const [baseExenta, setBaseExenta] = useState(parseFloat(0).toFixed(2))
    const [iva, setIva] = useState(parseFloat(0).toFixed(2))
    const [baseDiferenciada, setBaseDiferenciada] = useState(parseFloat(0).toFixed(2))
    const [total, setTotal] = useState(parseFloat(0).toFixed(2))

    useEffect(() => {

        if (notaCredito.infoNotaCredito.totalSinImpuestos) {
            setSubtotal(notaCredito.infoNotaCredito.totalSinImpuestos)
        } else {
            setSubtotal(0)
        }
        if (notaCredito.infoNotaCredito.totalDescuento) {
            setDescuento(notaCredito.infoNotaCredito.totalDescuento)
        } else {
            setDescuento(0)
        }

        const baseCeroElemento = notaCredito.infoNotaCredito.totalImpuesto.find(impuesto => impuesto.codigo === '0')
        if (baseCeroElemento && baseCeroElemento.baseImponible > 0) {
            setBaseCero(parseFloat(baseCeroElemento.baseImponible).toFixed(2));
        } else {
            setBaseCero(parseFloat(0).toFixed(2));
        }

        const baseGravadaElemento = notaCredito.infoNotaCredito.totalImpuesto.find(impuesto => impuesto.codigo === '2')
        if (baseGravadaElemento && baseGravadaElemento.baseImponible > 0) {
            setBaseGravada(parseFloat(baseGravadaElemento.baseImponible).toFixed(2));
        } else {
            setBaseGravada(parseFloat(0).toFixed(2));
        }
        if (baseGravadaElemento && baseGravadaElemento.valor > 0) {
            setIva(parseFloat(baseGravadaElemento.valor).toFixed(2));
        } else {
            setIva(parseFloat(0).toFixed(2));
        }

        const baseNoObjetoElemento = notaCredito.infoNotaCredito.totalImpuesto.find(impuesto => impuesto.codigo === '6')
        if (baseNoObjetoElemento && baseNoObjetoElemento.baseImponible > 0) {
            setBaseNoObjeto(parseFloat(baseNoObjetoElemento.baseImponible).toFixed(2));
        } else {
            setBaseNoObjeto();
        }

        const baseExentaElemento = notaCredito.infoNotaCredito.totalImpuesto.find(impuesto => impuesto.codigo === '7')
        if (baseExentaElemento && baseExentaElemento.baseImponible > 0) {
            setBaseExenta(parseFloat(baseExentaElemento.baseImponible).toFixed(2));
        } else {
            setBaseExenta();
        }

        const baseDiferenciadaElemento = notaCredito.infoNotaCredito.totalImpuesto.find(impuesto => impuesto.codigo === '8')
        if (baseDiferenciadaElemento && baseDiferenciadaElemento.baseImponible > 0) {
            setBaseDiferenciada(parseFloat(baseDiferenciadaElemento.baseImponible).toFixed(2));
        } else {
            setBaseDiferenciada();
        }
        if (notaCredito.infoNotaCredito.importeTotal) {
            setTotal(notaCredito.infoNotaCredito.importeTotal)
        } else {
            setTotal(0);
        }
    }, [notaCredito])


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
        lasttProductoTable: {
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
                            <Text style={{ fontSize: 10, textAlign: 'center', textTransform: 'uppercase' }}>{notaCredito.infoTributaria?.razonSocial}</Text>
                            <Text style={{ fontSize: 8, textAlign: 'center', textTransform: 'uppercase', color: '#00000060', marginTop: 2 }}>{notaCredito.infoTributaria?.nombreComercial}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 8, justifyContent: 'start', gap: 12, width: '100%', maxWidth: '100%' }}>
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                                    <Text style={{ fontSize: 8 }}>Dirección</Text>
                                    <Text style={{ fontSize: 8 }}>Matriz:</Text>
                                </View>
                                <View style={{ width: 180, paddingRight: 4 }}>
                                    <Text style={{ fontSize: 8, maxWidth: 180, paddingRight: 4, textWrap: 'wrap' }}>{notaCredito.infoTributaria?.dirMatriz}</Text>
                                </View>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 6, justifyContent: 'start', gap: 12, width: '100%', maxWidth: '100%' }}>
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                                    <Text style={{ fontSize: 8 }}>Dirección</Text>
                                    <Text style={{ fontSize: 8 }}>Sucursal:</Text>
                                </View>
                                <View style={{ width: 180, paddingRight: 4 }}>
                                    <Text style={{ fontSize: 8, maxWidth: 180, paddingRight: 4, textWrap: 'wrap' }}>{notaCredito.infoNotaCredito?.dirEstablecimiento}</Text>
                                </View>
                            </View>                          
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 6, justifyContent: 'start', gap: 12, width: '100%' }}>
                                <Text style={{ fontSize: 8 }}>OBLIGADO A LLEVAR CONTABILIDAD:</Text>
                                <Text style={{ fontSize: 8 }}>{notaCredito.infoNotaCredito?.obligadoContabilidad}</Text>
                            </View>
                            <View style={{ marginTop: 6 }}>
                                <Text style={{ fontSize: 8 }}>{notaCredito.infoTributaria?.contribuyenteRimpe}</Text>
                            </View>
                        </View>
                    </View>
                    {/* texto de la arriba a la derecha */}
                    <View style={styles.textTopRight}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                            <Text style={{ fontSize: 8 }}>R.U.C:</Text>
                            <Text style={{ fontSize: 8 }}>{notaCredito.infoTributaria?.ruc}</Text>
                        </View>
                        <View style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <Text style={{ fontSize: 8 }}>
                                {notaCredito.infoNotaCredito?.codDocModificado === '01' && 'FACTURA'}
                                {notaCredito.infoNotaCredito?.codDocModificado === '04' && 'NOTA DE CRÉDITO'}
                                {notaCredito.infoNotaCredito?.codDocModificado === '05' && 'NOTA DE DÉBITO'}
                                {notaCredito.infoNotaCredito?.codDocModificado === '06' && 'GUÍA DE REMISIÓN'}
                            </Text>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                                <Text style={{ fontSize: 8 }}>No.</Text>
                                <Text style={{ fontSize: 8 }}>
                                    {notaCredito.infoTributaria?.estab}-{notaCredito.infoTributaria?.ptoEmi}-{notaCredito.infoTributaria?.secuencial}
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <Text style={{ fontSize: 8 }}>NUMERO DE AUTORIZACIÓN</Text>
                            <Text style={{ fontSize: 8 }}>{notaCredito.infoTributaria?.claveAcceso}</Text>
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
                                {notaCredito.infoTributaria?.ambiente === '1' && 'PRUEBAS'}
                                {notaCredito.infoTributaria?.ambiente === '2' && 'PRODUCCIÓN'}
                            </Text>
                        </View>
                        <View style={{ marginTop: 14, display: 'flex', flexDirection: 'row', gap: 17 }}>
                            <Text style={{ fontSize: 8 }}>EMISIÓN:</Text>
                            <Text style={{ fontSize: 8 }}>
                                {notaCredito.infoTributaria?.tipoEmision === '1' && 'NORMAL'}
                            </Text>
                        </View>
                        <View style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <Text style={{ fontSize: 8 }}>CLAVE DE ACCESO</Text>
                            <Text style={{ fontSize: 8 }}>{notaCredito.infoTributaria?.claveAcceso}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.middleSection}>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <Text style={{ fontSize: 8, width: 220 }}>RAZÓN SOCIAL / NOMBRES Y APELLIDOS:</Text>
                        <Text style={{ fontSize: 8, textTransform: 'uppercase', width: 420 }}>{notaCredito.infoNotaCredito?.razonSocialComprador}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', width: '100%', gap: 32 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
                            <Text style={{ fontSize: 8 }}>IDENTIFICACIÓN:</Text>
                            <Text style={{ fontSize: 8 }}>{notaCredito.infoNotaCredito?.identificacionComprador}</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', width: '100%', gap: 32 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
                            <Text style={{ fontSize: 8 }}>FECHA DE EMISIÓN:</Text>
                            <Text style={{ fontSize: 8 }}>{notaCredito.infoNotaCredito?.fechaEmision}</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', borderTop: '1px solid #000000' }}>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <Text style={{ fontSize: 8, width: 175 }}>COMPROBANTE QUE SE MODIFICA:</Text>
                        <Text style={{ fontSize: 8, textTransform: 'uppercase', width: 420 }}>
                            {notaCredito.infoNotaCredito?.codDocModificado === '01' && 'FACTURA'}
                            {notaCredito.infoNotaCredito?.codDocModificado === '04' && 'NOTA DE CRÉDITO'}
                            {notaCredito.infoNotaCredito?.codDocModificado === '05' && 'NOTA DE DÉBITO'}
                            {notaCredito.infoNotaCredito?.codDocModificado === '06' && 'GUÍA DE REMISIÓN'}: {notaCredito.infoNotaCredito?.numDocModificado}
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <Text style={{ fontSize: 8, width: 280 }}>FECHA EMISIÓN (COMPROBANTE A MODIFICAR):</Text>
                        <Text style={{ fontSize: 8, textTransform: 'uppercase', width: 420 }}>{notaCredito.infoNotaCredito?.fechaEmisionDocSustento}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <Text style={{ fontSize: 8, width: 120 }}>RAZÓN DE MODIFICACIÓN:</Text>
                        <Text style={{ fontSize: 8, textTransform: 'uppercase', width: 420 }}>{notaCredito.infoNotaCredito?.motivo}</Text>
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
                    {/* Detalle */}
                    {
                        notaCredito.detalle?.map((producto, index) => (
                            <View style={index + 1 === notaCredito.detalle?.length ? styles.lastProductoTable : styles.productoTable} key={producto.codigoPrincipal}>
                                <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 150, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{producto.codigoInterno}</Text>
                                </View>
                                <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', flexGrow: 1, width: '100%', maxWidth: '100%', borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{producto.descripcion}</Text>
                                </View>
                                <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 100, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{parseFloat(producto.cantidad).toFixed(2)}</Text>
                                </View>
                                <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 100, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{parseFloat(producto.precioUnitario).toFixed(2)}</Text>
                                </View>
                                <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 100, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{parseFloat(producto.descuento).toFixed(2)}</Text>
                                </View>
                                <View style={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 150, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{parseFloat(producto.precioTotalSinImpuesto).toFixed(2)}</Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
                                 {/* VALORES TOTALES */}
                <View style={{marginLeft: 340, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '31.9%', gap: 32 }}>
                 <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'stretch', width: 'auto' }}>
                        <View style={styles.firstFilaFooter} key={total.title}>
                            <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', width: 142.7, borderLeft: '1px solid #000000' }}>
                                <Text style={{ fontSize: 5 }}>SubTotal</Text>
                            </View>
                            <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 107, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                <Text style={{ fontSize: 8 }}>{subtotal}</Text>
                            </View>
                        </View>
                        <View style={styles.filaFooter} key={total.title}>
                            <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', width: 142.7, borderLeft: '1px solid #000000' }}>
                                <Text style={{ fontSize: 5 }}>Descuento</Text>
                            </View>
                            <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 107, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                <Text style={{ fontSize: 8 }}>{descuento}</Text>
                            </View>
                        </View>
                        <View style={styles.filaFooter} key={total.title}>
                            <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', width: 142.7, borderLeft: '1px solid #000000' }}>
                                <Text style={{ fontSize: 5 }}>Base Gravada</Text>
                            </View>
                            <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 107, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                <Text style={{ fontSize: 8 }}>{baseGravada}</Text>
                            </View>
                        </View>
                        <View style={styles.filaFooter} key={total.title}>
                            <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', width: 142.7, borderLeft: '1px solid #000000' }}>
                                <Text style={{ fontSize: 5 }}>IVA</Text>
                            </View>
                            <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 107, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                <Text style={{ fontSize: 8 }}>{iva}</Text>
                            </View>
                        </View>
                        <View style={styles.filaFooter} key={total.title}>
                            <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', width: 142.7, borderLeft: '1px solid #000000' }}>
                                <Text style={{ fontSize: 5 }}>Base Cero</Text>
                            </View>
                            <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 107, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                <Text style={{ fontSize: 8 }}>{baseCero}</Text>
                            </View>
                        </View>
                        {baseNoObjeto &&
                            <View style={styles.filaFooter} key={total.title}>
                                <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', width: 142.7, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 5 }}>Base No Objeto</Text>
                                </View>
                                <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 107, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{baseNoObjeto}</Text>
                                </View>
                            </View>
                        }
                        {baseExenta &&
                            <View style={styles.filaFooter} key={total.title}>
                                <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', width: 142.7, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 5 }}>Base Exenta</Text>
                                </View>
                                <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 107, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{baseExenta}</Text>
                                </View>
                            </View>
                        }
                        {baseDiferenciada &&
                            <View style={styles.filaFooter} key={total.title}>
                                <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', width: 142.7, borderLeft: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 5 }}>Base Exenta</Text>
                                </View>
                                <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 107, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                    <Text style={{ fontSize: 8 }}>{baseDiferenciada}</Text>
                                </View>
                            </View>
                        }

                        <View style={styles.lastFilaFooter} key={total.title}>
                            <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'start', width: 142.7, borderLeft: '1px solid #000000' }}>
                                <Text style={{ fontSize: 5 }}>Total</Text>
                            </View>
                            <View style={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: 107, borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }}>
                                <Text style={{ fontSize: 8 }}>{total}</Text>
                            </View>
                        </View>
                    </View>


                </View>

              
            </Page>
        </Document>
    )
}

export default NotaCreditoPDF