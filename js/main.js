
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

/*
|--------------------------------------------------------------------------
| Events
|--------------------------------------------------------------------------
*/ 

// Create new person object
let person = {
    name:"edmond",

    // Create new event called walking && publish this event
    walk:function(){
        // publish walking event
        this.trigger("walking",{speed:2,startTime:"08:00"});
    }
}
// extend backbon events
_.extend(person,Backbone.Events);

// listen to walking event
person.on("walking", function(event){
    console.log("Person is walking");
    console.log("Event args",event);
})

person.off();
person.walk();