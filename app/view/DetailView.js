Ext.define('FakeMader.view.DetailView', {
    extend: 'Ext.dataview.List',

    config: {
        itemTpl: '<div>{detail}</div>'
    },

    initialize: function() {
        var data = [],
            raw = this.tweet.raw;
        
        this._add(data, this.tweet.raw);

        this.setStore(Ext.create('Ext.data.Store', {
            model: 'FakeMader.model.TweetDetails',
            data: data
        }));

        this.callParent(arguments);
    },

    _add: function(data, raw) {
        for (var key in raw) {
            var field = raw[key];

            if (Ext.isObject(field)) {
                this._add(data, field);
            }
            else {
                data.push({ detail: key + ': ' + field});
            }
        }
    }
});