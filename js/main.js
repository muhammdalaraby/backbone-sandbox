
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

/*
|--------------------------------------------------------------------------
| Views
|--------------------------------------------------------------------------
| Responsible for:
|||| rendering the content
|||| handling model and DOM events
*/

// Create  new song model
let Song = Backbone.Model.extend();

// Create new songs collection
let Songs = Backbone.Collection.extend({
    model: Song
});

// Create new song view
let SongView = Backbone.View.extend({
    tagName:"li",
    render:function(){
        this.$el.html(this.model.get('title'));
        return this;
    }
});

// Create new songs view
let SongsView = Backbone.View.extend({
   
    render:function (){
        // Store this in slef var to prevent throw an error
        const SELF = this;
    
        // Iterate through collection models
        this.model.each(function(song){
            let songView =  new SongView({model:song});
            // append song view element to the last item
            SELF.$el.append(songView.render().$el);
        });
    }
});


// Fill songs data
let songs = new Songs([
    new Song({title:"Blue in Green"}),
    new Song({title:"Blue in Green"}),
    new Song({title:"Blue in Green"}),
]);

// create song view insance
let songsView = new SongsView({el:"#container",model:songs});

// render song view
songsView.render();
