Ext.Loader.config.disableCaching = false;

Ext.application({
    name: 'FakeMader',
    models: ['Tweet', 'TweetDetails'],
    views: ['Main', 'TweetList', 'DetailView'],
    controllers: ['TweetController'],
    stores: ['Tweets'],

    launch: function() {
        Ext.Viewport.add(
            Ext.create('FakeMader.view.Main')
        );
    }
});