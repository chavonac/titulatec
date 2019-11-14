Ext.define('app.models.carrerasModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'idCarrera', type: 'int'},
        {name: 'siglas', type: 'string'},
        {name: 'nombre', type: 'string'},
        {name: 'creditos', type: 'int'},
        {name: 'especialidad', type: 'string'},
        {name: 'status', type: 'string'},
        {name: 'noempleado', type: 'int'}
    ]
});