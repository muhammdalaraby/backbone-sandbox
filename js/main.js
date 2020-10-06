
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

let SongView = Backbone.View.extend({
    render:function(){
        // Define template
          let template = _.template($("#songTemplate").html());  
        //associate template with html 
        let html = template(this.model.toJSON());

        // Display template on the dom
        this.$el.html(html);

        return this;
    }
})

let song = new Song({title: "Blue in Green",plays:1001});

// create song view insance
let songView = new SongView({el:"#container",model:song});


// render song view
songView.render();

