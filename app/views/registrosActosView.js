
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
            text: 'Eliminar',
            id: 'btnEliminarRA'
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
    initComponent: function() {
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
                        id: 'hfIdSolicitudes'
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
                                descValue: 'descripcion',
                                tpl: Ext.create('Ext.XTemplate',
                                        "<tpl for='.'>",
                                        "<div class='x-boundlist-item combo'>{noEmpleado} - {alumno.noControl}</div>",
                                        "</tpl>"
                                        )
                            }, {
                                xtype: 'textfield',
                                id: 'txtSolicitudesRA',
                                name: 'descSolicitud',
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
                            height: 260
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
                                                name: 'fecha',
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
                                                name: 'sala',
                                                fieldLabel: 'Sala',
                                                store: ''
                                            }, {
                                                xtype: 'textfield',
                                                id: 'txtSalaRA',
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
                                                id: 'cmbDictamenRA',
                                                name: 'dictamen',
                                                fieldLabel: 'Dictamen',
                                                store: datosDictamen(),
                                                queryMode: 'local',
                                                displayField: 'cveDictamen',
                                                valueField: 'cveDictamen',
                                                descValue: 'descripcion',
                                                tpl: Ext.create('Ext.XTemplate',
                                                        "<tpl for='.'>",
                                                        "<div class='x-boundlist-item combo'>{cveDictamen} - {descripcion}</div>",
                                                        "</tpl>"
                                                        )
                                            }, {
                                                xtype: 'textfield',
                                                id: 'txtDictamenRA',
                                                flex: 1,
                                                margin: '30 0 0 5',
                                                readOnly: true,
                                                submitValue: false
                                            }
                                        ]
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
                                                name: 'presidente',
                                                fieldLabel: 'Presidente',
                                                store: ''
                                            }, {
                                                xtype: 'textfield',
                                                id: 'txtPresidenteRA',
                                                name: 'nombrePresidente',
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
                                                name: 'secretario',
                                                fieldLabel: 'Secretario',
                                                store: ''
                                            }, {
                                                xtype: 'textfield',
                                                id: 'txtSecretarioRA',
                                                name: 'nombreSecretario',
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
                                                name: 'vocal',
                                                fieldLabel: 'vocal',
                                                store: ''
                                            }, {
                                                xtype: 'textfield',
                                                id: 'txtVocalRA',
                                                name: 'nombreVocal',
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
                        title: 'Actos registrados',
                        store: Ext.data.Store.create(),
                        height: 400,
                        columns: [
                            {
                                text: 'No. Solicitud',
                                width: 120,
                                dataIndex: ''
                            }, {
                                text: 'Alumno',
                                width: 400,
                                dataIndex: ''
                            }, {
                                text: 'Opci&oacute;n de titulaci&oacute;n',
                                width: 160,
                                dataIndex: ''
                            }, {
                                text: 'Fecha',
                                width: 120,
                                dataIndex: ''
                            }, {
                                text: 'Hora entrada',
                                width: 120,
                                dataIndex: ''
                            }, {
                                text: 'Hora fin',
                                width: 120,
                                dataIndex: ''
                            }, {
                                text: 'Sala',
                                width: 250,
                                dataIndex: ''
                            }, {
                                text: 'Dictamen',
                                width: 120,
                                dataIndex: ''
                            }, {
                                text: 'Estatus',
                                dataIndex: ''
                            }, {
                                text: 'Ver revisores',
                                width: 120,
                                dataIndex: ''
                            },
                        ]
                    }
                ]
            }];
        this.callParent();

        function datosDictamen() {
            return Ext.create('Ext.data.Store', {
                autoLoad: true,
                fields: ['cveDictamen', 'descripcion'],
                data: [
                    {"cveDictamen": "P", "descripcion": "Pendiente"},
                    {"cveDictamen": "A", "descripcion": "Aprobado"},
                    {"cveDictamen": "R", "descripcion": "Reprobado"}
                ]
            })
        }
        ;
    }
});