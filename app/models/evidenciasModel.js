Ext.define('app.models.evidenciasModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'idEvidencia', type: 'int'},
        {name: 'idSolicitud', type: 'int'},
        {name: 'nombre', type: 'string'},
        {name: 'archivo', type: 'string'},
        {name: 'extension', type: 'string'},
        {name: 'estatus', type: 'string'},
        {name: 'observaciones', type: 'string'}
    ]
});


