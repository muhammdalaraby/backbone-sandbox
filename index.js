$(document).ready(function(){

    // View
    
    // Create new backbone view
    let Person = Backbone.View.extend({
        // Change tag name
        tagName : 'span',
        className: "new class",
        id:"new class id",

        initialize: function(){
            this.render(); // render view
        },


        // Render function
        render: function(){
            // this,$el :- is a jquery object refer to dom 
            this.$el.html("here is custom message");
            // el:- refer to dom element
            // $el :- refer to jquery object
            console.log(this.el);
            console.log(this.$el);
        },
    }); 
    
    let person = new Person();
});

