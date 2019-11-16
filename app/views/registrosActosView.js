
Ext.define('app.views.registrosActosView', {
    extend: 'Ext.panel.Panel',
    xtype: 'registrosActos-main',
    tbar: [
        {
            text: 'Guardar',
            id: 'btnGuardarRA'
        },
        {
            text: 'Consultar',
            id: 'btnConsultarRA'
        },
        {
            text: 'Limpiar',
            id: 'btnLimpiarRA'
        },
        {
            text: 'Prever',
            id: 'btnPreverRA'
        }
    ],
    initComponent: function () {
        this.items = [{
                xtype: 'form',
                id: 'formRA',
                scrollable: true,
                defaults: {
                    margin: '0 10 0 10'
                },
                height: 550,
                items: [
                    {
                        xtype: 'hiddenfield',
                        id: 'txtIdActo',
                        name: 'idActo',
                    }, {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'combo',
                                id: 'cmbSolicitudesRA',
                                name: 'idSolicitud',
                                fieldLabel: 'Solicitudes',
                                store: 'app.stores.solicitudesStore',
                                labelAlign: 'top',
                                displayField: 'idSolicitud',
                                valueField: 'idSolicitud',
                                descValue: 'nombreProyecto',
                                tpl: Ext.create('Ext.XTemplate',
                                        "<tpl for='.'>",
                                        "<div class='x-boundlist-item combo'>{noEmpleado} - {noControl}</div>",
                                        "</tpl>"
                                        )
                            }, {
                                xtype: 'textfield',
                                id: 'txtSolicitudesRA',
                                name: 'nombreProyecto',
                                flex: 1,
                                margin: '30 0 0 5',
                                readOnly: true,
                                submitValue: false
                            }
                        ]
                    }, {
                        xtype: 'container',
                        layout: 'hbox',
                        defaults: {
                            xtype: 'fieldset',
                            height: 310
                        },
                        items: [
                            {
                                title: 'Datos generales',
                                flex: 1,
                                defaults: {
                                    xtype: 'container',
                                    layout: 'hbox'
                                },
                                items: [
                                    {
                                        defaults: {
                                            labelAlign: 'top'
                                        },
                                        items: [
                                            {
                                                xtype: 'datefield',
                                                id: 'dfFechaRA',
                                                name: 'fechaPresentacion',
                                                fieldLabel: 'fecha',
                                                value: new Date(),
                                                format: 'd M Y'
                                            }, {
                                                xtype: 'timefield',
                                                id: 'tmHoraInicioRA',
                                                name: 'horaInicio',
                                                fieldLabel: 'Hora inicio',
                                                value: '8:00 AM',
                                                minValue: '8:00 AM',
                                                maxValue: '6:00 PM',
                                                increment: 15,
                                                forceSelection: true,
                                                margin: '0 5 0 5'
                                            }, {
                                                xtype: 'timefield',
                                                id: 'tmHoraFinRA',
                                                name: 'horaFin',
                                                fieldLabel: 'Hora fin',
                                                value: '8:00 AM',
                                                minValue: '8:00 AM',
                                                maxValue: '6:00 PM',
                                                increment: 15,
                                                forceSelection: true
                                            }
                                        ]
                                    }, {
                                        defaults: {
                                            xtype: 'combo',
                                            labelAlign: 'top'
                                        },
                                        items: [
                                            {
                                                id: 'cmbSalaRA',
                                                name: 'idSala',
                                                fieldLabel: 'Sala',
                                                store: 'app.stores.salasStore',
                                                valueField: 'idSala',
                                                displayField: 'cveSala',
                                                descValue: 'descripcion',
                                                tpl: Ext.create('Ext.XTemplate',
                                                        "<tpl for='.'>",
                                                        "<div class='x-boundlist-item combo'>{cveSala} - {descripcion}</div>",
                                                        "</tpl>"
                                                        )
                                            }, {
                                                xtype: 'textfield',
                                                id: 'txtSalaRA',
                                                name: 'sala',
                                                flex: 1,
                                                margin: '30 0 0 5',
                                                readOnly: true,
                                                submitValue: false
                                            }
                                        ]
                                    }, {
                                        defaults: {
                                            xtype: 'combo',
                                            labelAlign: 'top'
                                        },
                                        items: [
                                            {
                                                id: 'cmbEstatusRA',
                                                name: 'cveEstatus',
                                                fieldLabel: 'Estatus',
                                                store: datosEstatus(),
                                                queryMode: 'local',
                                                displayField: 'cveEstatus',
                                                valueField: 'cveEstatus',
                                                descValue: 'descripcion',
                                                tpl: Ext.create('Ext.XTemplate',
                                                        "<tpl for='.'>",
                                                        "<div class='x-boundlist-item combo'>{cveEstatus} - {descripcion}</div>",
                                                        "</tpl>"
                                                        )
                                            }, {
                                                xtype: 'textfield',
                                                id: 'txtEstatusRA',
                                                name: 'estatus',
                                                flex: 1,
                                                margin: '30 0 0 5',
                                                readOnly: true,
                                                submitValue: false
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'textfield',
                                        labelAlign: 'top',
                                        fieldLabel: 'Dictamen',
                                        id: 'txtDictamenRA',
                                        flex: 1,
                                        width: '100%',
                                        name: 'dictamen'
                                    }
                                ]
                            }, {
                                title: 'Revisores',
                                flex: 0.9,
                                margin: '0 0 0 5',
                                defaults: {
                                    xtype: 'container',
                                    layout: 'hbox',
                                    defaults: {
                                        xtype: 'combo',
                                        labelAlign: 'top'
                                    }
                                },
                                items: [
                                    {
                                        items: [
                                            {
                                                id: 'cmbPresidenteRA',
                                                name: 'noDocenteP',
                                                fieldLabel: 'Presidente',
                                                store: 'app.stores.docentesStore',
                                                valueField: 'noDocente',
                                                displayField: 'noDocente',
                                                descValue: 'nombre',
                                                tpl: Ext.create('Ext.XTemplate',
                                                        "<tpl for='.'>",
                                                        "<div class='x-boundlist-item combo'>{noDocente} - {nombre}</div>",
                                                        "</tpl>"
                                                        )
                                            }, {
                                                xtype: 'textfield',
                                                id: 'txtPresidenteRA',
                                                name: 'nombreDocenteP',
                                                flex: 1,
                                                margin: '30 0 0 5',
                                                readOnly: true,
                                                submitValue: false
                                            }
                                        ]
                                    }, {
                                        items: [
                                            {
                                                id: 'cmbSecretarioRA',
                                                name: 'noDocenteS',
                                                fieldLabel: 'Secretario',
                                                store: 'app.stores.docentesStore',
                                                valueField: 'noDocente',
                                                displayField: 'noDocente',
                                                descValue: 'nombre',
                                                tpl: Ext.create('Ext.XTemplate',
                                                        "<tpl for='.'>",
                                                        "<div class='x-boundlist-item combo'>{noDocente} - {nombre}</div>",
                                                        "</tpl>"
                                                        )
                                            }, {
                                                xtype: 'textfield',
                                                id: 'txtSecretarioRA',
                                                name: 'nombreDocenteS',
                                                flex: 1,
                                                margin: '30 0 0 5',
                                                readOnly: true,
                                                submitValue: false
                                            }
                                        ]
                                    }, {
                                        items: [
                                            {
                                                id: 'cmbVocalRA',
                                                name: 'noDocenteV',
                                                fieldLabel: 'vocal',
                                                store: 'app.stores.docentesStore',
                                                valueField: 'noDocente',
                                                displayField: 'noDocente',
                                                descValue: 'nombre',
                                                tpl: Ext.create('Ext.XTemplate',
                                                        "<tpl for='.'>",
                                                        "<div class='x-boundlist-item combo'>{noDocente} - {nombre}</div>",
                                                        "</tpl>"
                                                        )
                                            }, {
                                                xtype: 'textfield',
                                                id: 'txtVocalRA',
                                                name: 'nombreDocenteV',
                                                flex: 1,
                                                margin: '30 0 0 5',
                                                readOnly: true,
                                                submitValue: false
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }, {
                        xtype: 'grid',
                        id: 'grdActos',
                        title: 'Actos registrados',
                        store: 'app.stores.actosStore',
                        height: 400,
                        columns: [
                            {
                                text: 'No. Solicitud',
                                width: 120,
                                dataIndex: 'idSolicitud'
                            }, {
                                text: 'Alumno',
                                width: 400,
                                dataIndex: 'alumno'
                            }, {
                                text: 'Opci&oacute;n de titulaci&oacute;n',
                                width: 160,
                                dataIndex: 'opcionTitulacion'
                            }, {
                                text: 'Fecha',
                                width: 120,
                                dataIndex: 'fechaPresentacion'
                            }, {
                                text: 'Hora inicio',
                                width: 120,
                                dataIndex: 'horaInicio'
                            }, {
                                text: 'Hora fin',
                                width: 120,
                                dataIndex: 'horaFin'
                            }, {
                                text: 'Sala',
                                width: 250,
                                dataIndex: 'sala'
                            }, {
                                text: 'Dictamen',
                                width: 120,
                                dataIndex: 'dictamen'
                            }, {
                                text: 'Estatus',
                                dataIndex: 'estatus'
                            }
                        ]
                    }
                ]
            }];
        this.callParent();

        function datosEstatus() {
            return Ext.create('Ext.data.Store', {
                autoLoad: true,
                fields: ['cveEstatus', 'descripcion'],
                data: [
                    {"cveEstatus": "P", "descripcion": "Pendiente"},
                    {"cveEstatus": "A", "descripcion": "Autorizado"},
                    {"cveEstatus": "R", "descripcion": "Realizado"},
                    {"cveEstatus": "C", "descripcion": "Cancelado"}
                ]
            })
        }
        ;
    }
});