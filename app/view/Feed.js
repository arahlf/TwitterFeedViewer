Ext.define('FakeMader.view.Feed', {
    extend: 'Ext.Panel',
    requires: ['Ext.dataview.List', 'Ext.navigation.View'],

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
            xtype: 'list',
            store: 'Tweets',
            itemTpl: '<div class="tweet">' +
                          '<table><tr>' + 
                               '<td><img src="{image}" /></td>' + 
                               '<td><p>{text}</p><p class="timestamp">{created_at:date("F j, Y")}</p></td>' +
                           '</tr></table>' + 
                       '</div>'
            }]
        }]);

        this.callParent();
    }
});