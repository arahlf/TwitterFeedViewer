Ext.define('FakeMader.store.Tweets', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.Store', 'Ext.data.proxy.JsonP'],

    config: {
        model: 'FakeMader.model.Tweet',
        proxy: {
            type: 'jsonp',
            //url: 'https://api.twitter.com/1/statuses/user_timeline.json?count=100',
            url: 'app/dataz.json',
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});