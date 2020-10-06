
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

/*
|--------------------------------------------------------------------------
| How to listene to collection events
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

        // add id for each song
        this.$el.attr("id",this.model.id);
        return this;
    }
});

// Create new songs view
let SongsView = Backbone.View.extend({
    tagName:"ul",
    
      // Update listeners number upon any change in model
      initialize:function(){
          // liseten to add event
        this.model.on("add",this.onSongAdded,this);

        // listen to remove event
        this.model.on('remove',this.onSongRemove,this);
    },

    onSongAdded : function (song){
        let songView =  new SongView({model: song});

        // append to songs list
        this.$el.append(songView.render().$el);
    },

    onSongRemove:function(song){
       //find the dom element with id && remove
    //    this.$el.find("li#"+sing.id).remove();
    this.$("#li"+song.id).remove();
    },

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
    new Song({id:1,title:"Blue in Green"}),
    new Song({id:2,title:"Blue in Green"}),
    new Song({id:4,title:"Blue in Green"}),
]);


// create song view insance
let songsView = new SongsView({el:"#container",model:songs});


// render song view
songsView.render();

