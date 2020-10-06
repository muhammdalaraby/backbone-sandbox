
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

// Create new song view
let SongView = Backbone.View.extend({
  
    // Create list event to handle Listen button click
    events:{
        // "click .listen":"onClick",
        "click":"onClick",
        "click .bookMark": "clickBookMark",
    },

    // Click function
    onClick: function(){
        console.log("button clikec");
    },
    clickBookMark: function(event){
        event.stopPropagation();
        console.log("clickBookMark ");
    },
    render:function(){
        this.$el.html(this.model.get('title') + "<button>Listen</button>  <button class=\"bookMark\">Book mark</button>");
        return this;
    }
});




// Fill songs data
let song = new Song({title:"Blue in Green"});

// create song view insance
let songView = new SongView({el:"#container",model:song});

// render song view
songView.render();
