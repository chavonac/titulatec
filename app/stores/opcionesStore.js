Ext.define('app.stores.opcionesStore', {
    extend      : 'Ext.data.Store',
    model       : 'app.models.opcionesModel',
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