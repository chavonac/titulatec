
Ext.define('app.stores.carrerasStore', {
    extend      : 'Ext.data.Store',
    model       : 'app.models.carrerasModel',
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