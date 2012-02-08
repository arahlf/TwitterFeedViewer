Ext.Loader.config.disableCaching = false;

Ext.application({
    name: 'FakeMader',
    models: ['Tweet'],
    views: ['Feed'],
    controllers: ['TweetController'],
    stores: ['Tweets'],

    launch: function() {
        Ext.Viewport.add(
            Ext.create('FakeMader.view.Feed')
        );
    }
});