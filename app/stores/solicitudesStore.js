
Ext.define('app.stores.solicitudesStore', {
    extend      : 'Ext.data.Store',
    model       : 'app.models.solicitudesModel',
    autoLoad    : false,
    proxy       : {
        type    : 'ajax',
        root    : 'data',
//        api     : {read : 'http://localhost:8082/TitulaTecRest/titulatec/solicitudes/solicitudesAprobadas'},
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