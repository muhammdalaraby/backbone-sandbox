
let TodoItemView = Backbone.View.extend({
    tagName:"li",
    initialize :function(options){
        // if model not passed throw an error
        if( !(options && options.model)){
            throw new Error("model is not specified.");
        }
    },
    render:function(){
        this.$el.html(this.model.get("description"));
    
        return this;
    }
})

