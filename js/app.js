
define([
    'underscore',
    'backbone',
    'models/song',
    'views/songView'],function(_, Backbone, Song, SongView){
    
    // Create initialize function
    let initialize = function(){

        var song = new Song({title:"Blue in Green"});
        
        var songView = new SongView({el:"#container",model :song});
        songView.render();
    }

    return {
        initialize:initialize
    }
});

