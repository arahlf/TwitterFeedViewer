Ext.define('FakeMader.view.Main', {
    extend: 'Ext.Panel',
    requires: ['Ext.Panel', 'Ext.navigation.View'],

    initialize: function() {
        this.setLayout('fit');

        this.add([{
            xtype: 'navigationview',
            layout: {
                type: 'card',
                animation: false
            },
            items: [{
                xtype: 'panel',
                title: 'Twitter Feed Viewer',
                layout: 'fit',
                items: [{
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [{
                        xtype: 'textfield',
                        name: 'screenName'
                    }, {
                        xtype: 'button',
                        text: 'Search'
                    }]
                }, {
                    xtype: 'tweetlist'
                }]
            }]
        }]);

        this.callParent();
    }
});