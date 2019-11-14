Ext.define('app.models.comentariosEvidenciasModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'idComentario', type: 'int'},
        {name: 'idEvidencia', type: 'int'},
        {name: 'fecha', type: 'date'},
        {name: 'observaciones', type: 'int'}
    ]
});