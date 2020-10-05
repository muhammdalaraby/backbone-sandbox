
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

/*
|--------------------------------------------------------------------------
| Collections :- a Set of models
|--------------------------------------------------------------------------
*/
 let Song = Backbone.Model.extend();
 let Songs = Backbone.Collection.extend({
     model: Song
 });
 var songs =  new Songs();
 
 // Add new song at index 0
 songs.add(new Song({title: "song1",genre:"Jazz",downloads:110}),{at:0});

 // push model to end of array
 songs.push(new Song({title:"song2",genre:"Jazz",downloads:90}));

 // Search on the collections

 let jaxxSongs = songs.where({genre:"Jazz"});  // return array of objects
 let firstSongs = songs.findWhere({genre:"Jazz"});

 // Filter results upon downloads number
 let topDownloads = songs.filter(function(song){
     return song.get("downloads") > 100;
 });

 console.log("TopDownload: ", topDownloads);

 // iterate through the current collections
 songs.each(function(song){
    console.log(song);
 })
