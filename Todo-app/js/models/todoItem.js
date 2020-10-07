

    let TodoItem = Backbone.Model.extend({
        // set some validation
        validate:function(attrs){
            if(!attrs.description){
                return "Description is required.";
            }
        }
    });

