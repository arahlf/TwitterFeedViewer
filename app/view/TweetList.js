Ext.define('FakeMader.view.TweetList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.tweetlist',
    requires: ['Ext.dataview.List'],

    config: {
        store: 'Tweets',
        itemTpl: '<div class="tweet">' +
                      '<table><tr>' + 
                           '<td><img src="{image}" /></td>' + 
                           '<td><p>{text}</p><p class="timestamp">{created_at:date("F j, Y")}</p></td>' +
                       '</tr></table>' + 
                   '</div>'
    }
});