Ext.application({
    name: 'app',
    controllers: ['app.controllers.titulatecController'],
    views: [
        'app.views.titulatecView',
        'app.views.registrosActosView'
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