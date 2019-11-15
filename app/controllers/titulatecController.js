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
                boxready: this.fnCargaPantalla
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
        var me = this;
        console.log('Cargar pantalla');
        var store = Ext.getCmp('cmbSolicitudesRA').getStore();
        this.fnStoreUrl(store, 'solicitudes.solicitudesAprobadas', me);
        store.load();

    },
    fnGuardar: function () {
        console.log('click guardar');
    },
    fnConsultar: function () {
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
                me.fnUrlPath('recursosTitulatec/descargaReporte') +
                '?' +
                'nombreReporte=' + nombreReporte +
                '&extension=' + extension +
                '&parametrosReporte=' + Ext.encode(parametrosReporte)
                );
    },
    fnUrlHost: function () {
        return 'http://localhost:8082';
    },
    fnUrlPath: function (recurso) {
        return Ext.isDefined(recurso) ? ('/TitulaTecRest/titulatec/' + recurso) : '/TitulaTecRest/titulatec';
    },

    fnStoreUrl: function (store, url, me) {
        var proxy = store.getProxy(),
                ruta,
                mod,
                tpl;

        if (url.indexOf(".") >= 0) {
            ruta = url.split(".");
            mod = ruta[0];
            tpl = ruta[1];
        } else {
            mod = url;
        }
        proxy.setUrl(me.fnGetRestUrl(mod, tpl, me));
    },
    fnGetRestUrl: function (modulo, template, me) {
        var url = me.fnUrlHost() + me.fnUrlPath();
        url += '/';

        if (Ext.isEmpty(template)) {
            url = url + modulo;
        } else {
            url = url + modulo + '/' + template;
        }
        return url;
    }
});

