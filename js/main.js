
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

/*
|--------------------------------------------------------------------------
| Routers
|--------------------------------------------------------------------------
*/ 

/*
|--------------------------------------------------------------------------
| Views
|--------------------------------------------------------------------------
*/ 
// Create views for navbar linkes
let ArtistsView = Backbone.View.extend({
    render:function(){
        this.$el.html("ARTISTA BIEW");
    },
});

let AlbumView = Backbone.View.extend({
    render:function(){
        this.$el.html("ALBUM BIEW");
    },
});

let GenreView = Backbone.View.extend({
    render:function(){
        this.$el.html("GENRE VIEW");
    },
});

/*
|--------------------------------------------------------------------------
| Routers
|--------------------------------------------------------------------------
*/ 

let AppRouter = Backbone.Router.extend({
    // Set views router
    routes: {
        "albums":"viewAlbums",
        "ablums/:albumID": "viewAlbumById",
        "artists":"viewArtists",
        "genres":"viewGenres",
        "*other":"defaultRoutes"
    },
    /******[  Functions  ]*******/
    
    //view albumes
    viewAlbums:function(){
        let view = new AlbumView({el:"#container"});
        view.render();
    },

    //view Artists
    viewArtists:function(){
        let view = new ArtistsView({el:"#container"});
        view.render();
    },

    //view genre
    viewGenres:function(){
        let view = new GenreView({el:"#container"});
        view.render();
    },
    defaultRoute:function(){},
});

/*
|--------------------------------------------------------------------------
| Begin Actions
|--------------------------------------------------------------------------
*/ 

// Create new router instance 
let router = new AppRouter();

// start listen to url
Backbone.history.start();

// create nav bar item and trigger them with routers

let NavView = Backbone.View.extend({
    events: {
        "click":"onClick"
    },
    onClick:function(e){
        // get li element
        let $li = $(e.target);

        router.navigate($li.attr("data-url"),{trigger:true});

    }
});

//Start nav view
let navView =  new NavView({el:"#nav"});

