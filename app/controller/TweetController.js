Ext.define('FakeMader.controller.TweetController', {
    extend: 'Ext.app.Controller',

    initialScreenName: 'FakeMader',

    config: {
        refs: {
            searchText: 'textfield',
            searchButton: 'button[text=Search]',
            tweetList: 'tweetlist',
            navView: 'navigationview'
        },

        control: {
            searchButton: {
                tap: 'onSearchTap'
            },
            tweetList: {
                itemswipe: function(list, index, target, record, event, options) {
                    if (event.direction === 'left') {
                        this.addDetailView(record);
                        this.redirectTo(record);
                    }
                }
            },
            navView: {
                pop: 'onDetailViewRemoved'
            }
        },

        routes: {
            'tweet/:id': 'showDetailView',
            'index': function() {
                // this doesn't get called, but the redirectTo doesn't work without it for some reason...
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
        this.getTweetList().getStore().load({
            params: {
                screen_name: screenName
            }
        });
    },

    showDetailView: function(id) {
        var store = this.getTweetList().getStore();
        
        store.on('load', function() {
            var tweetIndex = store.findExact('id', parseInt(id, 10));

            if (tweetIndex !== -1) {
                this.addDetailView(store.getAt(tweetIndex));
            }
            else {
                Ext.Msg.alert('Error', 'Unable to find tweet.', function() {
                    this.redirectTo('index');
                }, this);
            }
        }, this);
    },

    addDetailView: function(tweet) {
        this.getNavView().push(Ext.create('FakeMader.view.DetailView', {
            tweet: tweet
        }));
    },

    onDetailViewRemoved: function(navView, view, options) {
        this.redirectTo('index');
    },

    index: function() {
        // this gets called for some reason when running this.redirectTo('');
    }
});