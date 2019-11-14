Ext.application({
    name: 'app',
    controllers: [
        'app.controllers.titulatecController'
    ],
    views: [
        'app.views.titulatecView',
        'app.views.registrosActosView'
    ],
    stores: [
        'app.stores.solicitudesStore',
        'app.stores.actosStore'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            items: [
                {
                    xtype: 'titulatec-main'
                }
            ]
        });
    }
});