define(['angular'], function(angular) {

    var config = angular.module('app-config', []);
    config
        .constant('APP_FLAGS', {
            'features' : false,
            'showSidebar' : true,
            'showSearch' : true,
            'isWeb' : false
        })
        .constant('SERVICE_LOC', {
            'aboutURL' : null,
            'sessionInfo' : 'staticFeeds/session.json',
            'sidebarInfo' : 'staticFeeds/sidebar.json',
            'featuresInfo' : 'staticFeeds/features.json',
            'notificationsURL' : null,
            'kvURL' : null,
            'groupURL' : null
        })
        .constant('NAMES', {
            'title' : 'MyUW',
            'ariaLabelTitle' : 'My U W',
            'crest' : 'img/uwcrest_web_sm.png',
            'crestalt' : 'UW Crest',
            'sublogo' : 'seed',
            'guestUserName' : 'guest'
        })
        .constant('SEARCH',{
            'searchURL' : 'https://my.wisc.edu/web/apps/search/'
        })
        .constant('NOTIFICATION', {
            'enabled' : false,
            'groupFiltering' : false,
            'notificationFullURL' : 'notifications'
        })
        .constant('MISC_URLS',{
          'feedbackURL' : 'https://my.wisc.edu/portal/p/feedback',
          'helpdeskURL' : 'https://kb.wisc.edu/helpdesk/',
          'back2ClassicURL' : null,
          'whatsNewURL' : null,
          'loginURL' : '/portal/Login?profile=bucky',
          'logoutURL' : '/portal/Logout',
          'myuwHome' : 'https://my.wisc.edu'
        });

    return config;

});
