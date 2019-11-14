Ext.define('app.models.administrativosModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'noEmpleado', type: 'int'},
        {name: 'idPuesto', type: 'int'},
        {name: 'idDepartamento', type: 'int'},
        {name: 'idUsuario', type: 'int'},
        {name: 'estatus', type: 'int'}
    ]
});


