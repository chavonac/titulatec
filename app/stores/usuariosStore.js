
Ext.define('app.stores.usuariosStore', {
    extend      : 'Ext.data.Store',
    model       : 'app.models.usuariosModel',
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
