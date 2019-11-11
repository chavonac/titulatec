/*
    validar si existe el alumno
    validar situacion del alumno
    adjunto la documentacion
    Agender acto
*/

Ext.define('app.controllers.titulatecController', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'registrosActos-main': {
                afterrender: this.fnCargaPantalla,
            },
            'registrosActos-main #btnGuardarRA': {
                click: this.fnGuardar
            },
            'registrosActos-main #btnConsultarRA': {
                click: this.fnConsultar
            },
            'registrosActos-main #btnEliminarRA': {
                click: this.fnEliminar
            },
            'registrosActos-main #btnLimpiarRA': {
                click: this.fnLimpiar
            },
            'registrosActos-main #btnPreverRA': {
                click: this.fnPrever
            },
            'registrosActos-main #cmbDictamenRA': {
                select: this.fnSelectCombo,
                blur: this.fnBlurCombo
            }
        });
    },
    fnCargaPantalla: function () {
        console.log('Cargar pantalla')
    },
    fnGuardar: function () {
        console.log('click guardar');
    },
    fnConsultar: function () {
        this.fnCargaSolicitudes();
    },
    fnEliminar: function () {
        console.log('click eliminar');
    },
    fnLimpiar: function () {
        Ext.getCmp('formRA').reset();
    },
    fnPrever: function () {
        var me = this,
            nombreReporte = 'ReportePrueba',
            extension = 'pdf';
        parametrosReporte = {
            P_idSolicitud: 1
        };
        me.fnDescargaArchivo(nombreReporte, extension, parametrosReporte, me);
    },
    fnSelectCombo: function (cmb, record) {
        var me = this;
        me.fnSetDescricpionCombo(cmb, record);
    },
    fnSetDescricpionCombo: function (cmb, record) {
        cmb.nextNode().setValue(record.data[cmb.descValue]);
    },
    fnBlurCombo: function (cmb, record) {
        if (Ext.isEmpty(cmb.getValue())) {
            cmb.reset();
            cmb.nextNode().reset();
        }
    },
    fnCargaSolicitudes: function () {
        console.log('Carga Solicitud');
    },
    fnDescargaArchivo: function (nombreReporte, extension, parametrosReporte, me) {
        window.open(me.fnUrlHost() +
            me.fnUrlPath() +
            '?' +
            'nombreReporte=' + nombreReporte +
            '&extension=' + extension +
            '&parametrosReporte=' + Ext.encode(parametrosReporte)
        );
    },
    fnUrlHost: function () {
        return 'http://localhost:8080';
    },
    fnUrlPath: function () {
        return '/TitulaTecRest/titulatec/recursosTitulatec/descargaReporte';
    }
});

