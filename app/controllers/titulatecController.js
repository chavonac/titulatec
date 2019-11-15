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
            'registrosActos-main #cmbEstatusRA, #cmbSolicitudesRA, #cmbSalaRA, #cmbPresidenteRA, #cmbSecretarioRA, #cmbVocalRA': {
                select: this.fnSelectCombo,
                blur: this.fnBlurCombo
            },
            'registrosActos-main #grdActos': {
                select: this.seleccionaRegistroGrid
            }
        });
    },
    fnCargaPantalla: function () {
        var me = this;
        console.log('Cargar pantalla');
        var storeSolicitudes = Ext.getCmp('cmbSolicitudesRA').getStore();
        this.fnStoreUrl(storeSolicitudes, 'solicitudes.solicitudesAprobadas', me);
        storeSolicitudes.load();

        var storeSalas = Ext.getCmp('cmbSalaRA').getStore();
        this.fnStoreUrl(storeSalas, 'salas.consultaSalasDisponibles', me);
        storeSalas.load();

        var storeDocenteP = Ext.getCmp('cmbPresidenteRA').getStore();
        this.fnStoreUrl(storeDocenteP, 'docentes.consultaDocentesActivos', me);
        storeDocenteP.load();

        var storeDocenteS = Ext.getCmp('cmbSecretarioRA').getStore();
        this.fnStoreUrl(storeDocenteS, 'solicitudes.consultaDocentesActivos', me);
        storeDocenteS.load();

        var storeDocenteV = Ext.getCmp('cmbVocalRA').getStore();
        this.fnStoreUrl(storeDocenteV, 'solicitudes.consultaDocentesActivos', me);
        storeDocenteV.load();

    },
    fnGuardar: function () {
        console.log('click guardar');
    },
    fnConsultar: function () {
        var me = this,
                store = Ext.getCmp('grdActos').getStore();
        if (!Ext.isEmpty(Ext.getCmp('cmbSolicitudesRA').getValue())) {
            var param = '?idSolicitud=' + Ext.getCmp('cmbSolicitudesRA').getValue();
            this.fnStoreUrl(store, 'actos.consultaActos', me, param);
        } else {
            this.fnStoreUrl(store, 'actos.consultaActos', me);
        }
        store.load();
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

    fnStoreUrl: function (store, url, me, params) {
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
        proxy.setUrl(me.fnGetRestUrl(mod, tpl, me, params));
    },
    fnGetRestUrl: function (modulo, template, me, params) {
        var url = me.fnUrlHost() + me.fnUrlPath();
        url += '/';

        if (Ext.isEmpty(template)) {
            url = url + modulo;
        } else {
            url = url + modulo + '/' + template;
        }
        if (Ext.isDefined(params)) {
            url = url + params;
        }
        return url;
    },
    seleccionaRegistroGrid: function (thiss, record) {
      Ext.getCmp('frmRegistrosActos').getForm().loadRecord(record);
    }
});

