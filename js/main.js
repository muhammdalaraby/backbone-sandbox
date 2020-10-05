
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

/*
|--------------------------------------------------------------------------
| Collections :- a Set of models
|--------------------------------------------------------------------------
*/
// Connecting to the server

let Song = Backbone.Model.extend();

let Songs = Backbone.Collection.extend({
    model:Song,
    url:"api/spongs",
});

// Fetch data for the server
let songs =  new Songs();
songs.fetch();
