Ext.define('app.stores.puestosStore', {
    extend      : 'Ext.data.Store',
    model       : 'app.models.puestosModel',
    autoLoad    : false,
    proxy       : {
        type    : 'ajax',
        root    : 'data',
//        api     : {read : '/' + mx.com.lobos.util.form.getAplication() + '/ConsultaRolesFuncionesStore.x'},
        reader  : {
            type            : 'json',
            rootProperty    : 'data',
            successProperty : 'success',
            messageProperty : 'message',
            totalProperty   : 'total'
        },
        writer  : {
            type            : 'json',
            writeAllFields  : true,
            rootProperty    : 'data'
        }
    }
});