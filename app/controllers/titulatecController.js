/*
 validar si existe el alumno
 validar situacion del alumno
 adjunto la documentacion
 Agender acto
 */

Ext.define('app.controllers.titulatecController', {
    extend: 'Ext.app.Controller',
    init: function() {
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
            'registrosActos-main #reporte1, #reporte2': {
                click: this.fnPrever
            },
            'registrosActos-main #cmbEstatusRA, #cmbSolicitudesRA, #cmbSalaRA, #cmbPresidenteRA, #cmbSecretarioRA, #cmbVocalRA': {
                select: this.fnSelectCombo,
                blur: this.fnBlurCombo
            },
            'registrosActos-main #grdActos': {
                select: this.seleccionaRegistroGrid
            },
            'registrosActos-main #tmHoraInicioRA, #tmHoraFinRA': {
                change: this.configConsultaSalas
            },
            'registrosActos-main #dfFechaRA': {
                select: this.configConsultaSalas
            }
        });
    },
    fnCargaPantalla: function() {
        var me = this;
        me.fnLogin();
        var storeSolicitudes = Ext.getCmp('cmbSolicitudesRA').getStore();
        me.fnStoreUrl(storeSolicitudes, 'solicitudes.solicitudesAprobadas', me);
        storeSolicitudes.load();

        var storeSalas = Ext.getCmp('cmbSalaRA').getStore();
        me.fnStoreUrl(storeSalas, 'salas.consultaSalasDisponibles', me);

        cargaComboSalas(storeSalas);

        var storeDocenteP = Ext.getCmp('cmbPresidenteRA').getStore();
        me.fnStoreUrl(storeDocenteP, 'docentes.consultaDocentesActivos', me);
        storeDocenteP.load();

        var storeDocenteS = Ext.getCmp('cmbSecretarioRA').getStore();
        me.fnStoreUrl(storeDocenteS, 'solicitudes.consultaDocentesActivos', me);
        storeDocenteS.load();

        var storeDocenteV = Ext.getCmp('cmbVocalRA').getStore();
        me.fnStoreUrl(storeDocenteV, 'solicitudes.consultaDocentesActivos', me);
        storeDocenteV.load();

    },
    fnGuardar: function() {
        var me = this,
                idActo = Ext.getCmp('txtIdActo').getValue(),
                operacion = 'actos' + (Ext.isEmpty(idActo) ? '/insertaActo' : '/actualizaActo'),
                params = {};
        params = me.setParams();
        Ext.Ajax.request({
            headers: {'Content-Type': 'application/json'},
            url: me.fnGetRestUrl(operacion, '', me),
            params: Ext.encode(params)
        });
    },
    fnConsultar: function() {
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
    fnEliminar: function() {
        console.log('click eliminar');
    },
    fnLimpiar: function() {
        Ext.getCmp('formRA').reset();
        Ext.getCmp('grdActos').getStore().removeAll();
    },
    fnPrever: function(btn) {
        var seleccionado = Ext.getCmp('grdActos').getSelection();
        if (!Ext.isEmpty(seleccionado)) {
            var me = this,
                    nombreReporte = btn.reporte,
                    extension = 'pdf',
                    parametrosReporte = {
                        P_idActo: seleccionado[0].data.idActo
                    };
            me.fnDescargaArchivo(nombreReporte, extension, parametrosReporte, me);
        } else {
            msj('Debe de seleccionar un acto de la lista.');
        }
    },
    fnSelectCombo: function(cmb, record) {
        var me = this;
        me.fnSetDescricpionCombo(cmb, record);
    },
    fnSetDescricpionCombo: function(cmb, record) {
        cmb.nextNode().setValue(record.data[cmb.descValue]);
    },
    fnBlurCombo: function(cmb, record) {
        if (Ext.isEmpty(cmb.getValue())) {
            cmb.reset();
            cmb.nextNode().reset();
        }
    },
    fnCargaSolicitudes: function() {
        console.log('Carga Solicitud');
    },
    fnDescargaArchivo: function(nombreReporte, extension, parametrosReporte, me) {
        window.open(encodeURI(me.fnUrlHost() +
                me.fnUrlPath('recursosTitulatec/descargaReporte') +
                '?' +
                'nombreReporte=' + nombreReporte +
                '&extension=' + extension +
                '&parametrosReporte=' + JSON.stringify(parametrosReporte)
                ));
    },
    fnUrlHost: function() {
        return 'http://localhost:8080';
    },
    fnUrlPath: function(recurso) {
        return Ext.isDefined(recurso) ? ('/TitulaTecRest/titulatec/' + recurso) : '/TitulaTecRest/titulatec';
    },
    fnStoreUrl: function(store, url, me, params) {
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
    fnGetRestUrl: function(modulo, template, me, params) {
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
    seleccionaRegistroGrid: function(thiss, record) {
        Ext.getCmp('formRA').getForm().loadRecord(record);
        Ext.getCmp('tmHoraInicioRA').setValue(Ext.Date.parse(record.data.horaInicio, "H:i:s"));
        Ext.getCmp('tmHoraFinRA').setValue(Ext.Date.parse(record.data.horaFin, "H:i:s"));
    },
    setParams: function() {
        var params = {};
        params.idActo = Ext.getCmp('txtIdActo').getValue();
        params.idSolicitud = Ext.getCmp('cmbSolicitudesRA').getValue();
        params.idSala = Ext.getCmp('cmbSalaRA').getValue();
        params.noDocenteP = Ext.getCmp('cmbPresidenteRA').getValue();
        params.nombreDocenteP = Ext.getCmp('txtPresidenteRA').getValue();
        params.emailDocenteP = Ext.getCmp('cmbPresidenteRA').getSelection().data.email;
        params.noDocenteS = Ext.getCmp('cmbSecretarioRA').getValue();
        params.nombreDocenteS = Ext.getCmp('txtSecretarioRA').getValue();
        params.emailDocenteS = Ext.getCmp('cmbSecretarioRA').getSelection().data.email;
        params.noDocenteV = Ext.getCmp('cmbVocalRA').getValue();
        params.nombreDocenteV = Ext.getCmp('txtVocalRA').getValue();
        params.emailDocenteV = Ext.getCmp('cmbVocalRA').getSelection().data.email;
        params.fechaPresentacion = Ext.Date.format(Ext.getCmp('dfFechaRA').getValue(), 'Y-m-d');
        params.horaInicio = Ext.Date.format(Ext.getCmp('tmHoraInicioRA').getValue(), "H:i:s");
        params.horaFin = Ext.Date.format(Ext.getCmp('tmHoraFinRA').getValue(), "H:i:s");
        params.dictamen = Ext.getCmp('txtDictamenRA').getValue();
        params.estatus = Ext.getCmp('cmbEstatusRA').getValue();
        params.nombreProyecto = Ext.getCmp('cmbSolicitudesRA').getSelection().data.nombreProyecto;
        params.noControl = Ext.getCmp('cmbSolicitudesRA').getSelection().data.noControl;
        params.nombreAlumno = Ext.getCmp('cmbSolicitudesRA').getSelection().data.nombreAlumno;
        params.emailAlumno = Ext.getCmp('cmbSolicitudesRA').getSelection().data.emailAlumno;
        params.nombreAdministrativo = Ext.getCmp('cmbSolicitudesRA').getSelection().data.nombreAdministrativo;
        params.emailAdministrativo = Ext.getCmp('cmbSolicitudesRA').getSelection().data.emailAdministrativo;
        return params;
    },
    configConsultaSalas: function() {
        var storeSalas = Ext.getCmp('cmbSalaRA').getStore();
        cargaComboSalas(storeSalas);
    },
    fnLogin: function() {
        var me = this,
                login = Ext.create('Ext.window.Window', {
                    title: 'Titulatec - login',
                    height: 220,
                    width: 400,
                    modal: true,
                    closable: false,
                    defaults: {
                        xtype: 'textfield',
                        labelAlign: 'top',
                        width: '95%',
                        margin: '0 5 0 10'
                    },
                    items: [
                        {
                            id: 'txtCorreo',
                            fieldLabel: 'Correo',
                            vtype: 'email'
                        }, {
                            id: 'txtPassword',
                            fieldLabel: 'Password',
                            inputType: 'password'
                        }
                    ],
                    bbar: [
                        '->',
                        {
                            text: 'Aceptar',
                            handler: function() {
                                Ext.Ajax.request({
                                    headers: {'Content-Type': 'application/json'},
                                    url: me.fnUrlHost() + '/TitulaTecRest/titulatec/usuarios/validaUsuario?correo=' + Ext.getCmp('txtCorreo').getValue() + '&password=' + Ext.getCmp('txtPassword').getValue(),
                                    success: function(operation, request) {
                                        var res = Ext.decode(operation.responseText);
                                        if (res.total > 0) {
                                            msj('Bienvenido');
                                            login.close();
                                        } else {
                                            msj('Correo o password incorrecto.');
                                        }
                                    }
                                });
                            }
                        }
                    ]
                }).show();
    }
});

function msj(mensaje) {
    Ext.Msg.alert('Titulatec', mensaje, Ext.emptyFn);
}
;
function cargaComboSalas(storeSalas) {
    storeSalas.load({
        params: {
            fechaPresentacion: Ext.Date.format(Ext.getCmp('dfFechaRA').getValue(), 'Y-m-d'),
            horaInicio: Ext.Date.format(Ext.getCmp('tmHoraInicioRA').getValue(), "H:i:s"),
            horaFin: Ext.Date.format(Ext.getCmp('tmHoraFinRA').getValue(), "H:i:s")
        }
    });
}
;
