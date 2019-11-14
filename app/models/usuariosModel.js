Ext.define('app.models.usuariosModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'idUsuario', type: 'int'},
        {name: 'email', type: 'string'},
        {name: 'clave', type: 'string'},
        {name: 'nombre', type: 'string'},
        {name: 'sexo', type: 'string'},
        {name: 'telefono', type: 'string'},
        {name: 'tipo', type: 'string'},
        {name: 'estatus', type: 'string'}
    ]
});