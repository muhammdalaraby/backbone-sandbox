
// configure scripts locations
require.config({
    paths: {
        jquery:'lib/jquery-min',
        underscore:'lib/underscore-min',
        backbone:'lib/backbone-min',
    }
})


// Start the application
define(['app'],function(App){
    App.initialize();
});

