Ext.define('app.stores.evidenciasStore', {
    extend      : 'Ext.data.Store',
    model       : 'app.models.evidenciasModel',
    autoLoad    : false,
    proxy       : {
        type    : 'ajax',
        root    : 'data',
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