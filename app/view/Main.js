Ext.define('FakeMader.view.Main', {
    extend: 'Ext.Panel',
    requires: ['Ext.Panel', 'Ext.navigation.View'],

    initialize: function() {
        this.setLayout('fit');

        this.add([{
            docked: 'top',
            xtype: 'toolbar',
            items: [{
                xtype: 'title',
                title: 'Twitter Feed Viewer'
            }, {
                xtype: 'component',
                flex: 1  
            }, {
                xtype: 'textfield',
                name: 'screenName'
            }, {
                xtype: 'button',
                text: 'Search'
            }]
        }, {
            xtype: 'navigationview',
            items: [{
                xtype: 'tweetlist'
            }]
        }]);

        this.callParent();
    }
});