
Ext.define('app.models.docentesModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'noDocente', type: 'int'},
        {name: 'idCarrera', type: 'int'},
        {name: 'idUsuario', type: 'int'},
        {name: 'escolaridad', type: 'string'},
        {name: 'especialidad', type: 'string'},
        {name: 'cedula', type: 'string'},
        {name: 'estatus', type: 'string'}
    ]
});


