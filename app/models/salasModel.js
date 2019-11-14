Ext.define('app.models.salasModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'idSala', type: 'int'},
        {name: 'cveSala', type: 'string'},
        {name: 'descripcion', type: 'string'}
    ]
});