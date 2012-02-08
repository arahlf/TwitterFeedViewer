Ext.define('FakeMader.model.Tweet', {
    extend: 'Ext.data.Model',

    config: {
        fields: [ 
            { name: 'text', },
            { name: 'retweet_count', type: 'int' },
            { name: 'created_at', type: 'date' },
            { name: 'image', convert: function(value, rec){ return rec.raw.user.profile_image_url }}
        ]
    }
});