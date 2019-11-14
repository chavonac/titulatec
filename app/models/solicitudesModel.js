
Ext.define('app.models.solicitudesModel', {
    extend: 'Ext.data.Model',
    idProperty: 'idSolitud',
    fields: [
        {name: 'idSolitud', type: 'int'},
        {name: 'noControl', type: 'string'},
        {name: 'noEmpleado', type: 'int'},
        {name: 'idOpcion', type: 'int'},
        {name: 'fechaElaboracion', type: 'date'},
        {name: 'nombreProyecto', type: 'string'},
        {name: 'estatus', type: 'string'}
    ]
});


