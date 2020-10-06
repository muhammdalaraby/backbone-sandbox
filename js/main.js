
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
let Song = Backbone.Model.extend({
    defaults:{
        listeners : 0
    }
});

// Create new song view
let SongView = Backbone.View.extend({
  
    // Update listeners number upon any change in model
    initialize:function(){
        // this.model.on("change",any custom method,this);
        this.model.on("change",this.render,this);
    },

    render:function(){
        this.$el.html(this.model.get('title') + " - Listeners: " + this.model.get("listeners"));
        return this;
    }
});




// Fill songs data
let song = new Song({title:"Blue in Green"});

// create song view insance
let songView = new SongView({el:"#container",model:song});

// render song view
songView.render();
