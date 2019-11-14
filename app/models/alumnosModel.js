Ext.define('app.models.alumnosModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'noControl', type: 'string'},
        {name: 'idCarrera', type: 'int'},
        {name: 'idUsuario', type: 'int'},
        {name: 'idEstatus', type: 'int'},
        {name: 'promedio', type: 'float'},
        {name: 'creditos', type: 'int'}
    ]
});