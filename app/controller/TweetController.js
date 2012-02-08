Ext.define('FakeMader.controller.TweetController', {
    extend: 'Ext.app.Controller',

    initialScreenName: 'FakeMader',

    config: {
        refs: {
            searchText: 'textfield',
            searchButton: 'button[text=Search]',
            tweetView: 'list',
            navView: 'navigationview'
        },

        control: {
            searchButton: {
                tap: 'onSearchTap'
            },
            tweetView: {
                itemswipe: function(list, index, target, record, event, options) {
                    if (event.direction === 'left') {
                        this.getNavView().push({
                            xtype: 'panel',
                            html: 'I could put some details here...'
                        });
                    }
                }
            }
        }
    },

    launch: function() {
        this.getSearchText().setValue(this.initialScreenName);
        this.doSearch(this.initialScreenName);
    },

    onSearchTap: function() {
        this.doSearch(this.getSearchText().getValue());
    },

    doSearch: function(screenName) {
        this.getTweetView().getStore().load({
            params: {
                screen_name: screenName
            }
        });
    }
});