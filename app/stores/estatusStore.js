Ext.define('app.stores.estatusStore', {
    extend      : 'Ext.data.Store',
    model       : 'app.models.estatusModel',
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