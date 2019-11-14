Ext.define('app.models.actosModel', {
    extend: 'Ext.data.Model',
    idProperty: 'idActo',
    fields: [
        {name: 'idActo', type: 'int'},
        {name: 'idSolicitud', type: 'int'},
        {name: 'idSala', type: 'int'},
        {name: 'noDocenteP', type: 'int'},
        {name: 'noDocenteS', type: 'int'},
        {name: 'noDocenteV', type: 'int'},
        {name: 'fechaPresentacion', type: 'date'},
        {name: 'horaInicio', type: 'date'},
        {name: 'horafin', type: 'date'},
        {name: 'dictamen', type: 'string'},
        {name: 'horafin', type: 'string'}
    ]
});