
Ext.define('app.models.puestosModel', {
    extend: 'Ext.data.Model',
    idProperty: 'idSolitud',
    fields: [
        {name: 'idPuesto', type: 'int'},
        {name: 'nombre', type: 'string'}
    ]
});