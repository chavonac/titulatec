Ext.define('app.controllers.titulatecController', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
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
    fnGuardar: function () {
        console.log('click guardar');
    },
    fnConsultar: function () {
        console.log('click consultar');
    },
    fnEliminar: function () {
        console.log('click eliminar');
    },
    fnLimpiar: function () {
        Ext.getCmp('formRA').reset();
    },
    fnPrever: function () {
        console.log('click prever');
    },
    fnSelectCombo: function (cmb, record) {
        var me = this;
        me.fnSetDescricpionCombo(cmb, record);
    },
    fnSetDescricpionCombo: function (cmb, record) {
        cmb.nextNode().setValue(record.data[cmb.descValue])
    },
    fnBlurCombo: function (cmb, record) {
        if (Ext.isEmpty(cmb.getValue())) {
            cmb.reset()
            cmb.nextNode().reset();
        }
    }
});

