
let TodoItemsView = Backbone.View.extend({
    tagName:"ul",
    id:"todoitems",

    // Check fo model passed value
    initialize:function(options){
        if (!(options && options.model)){
            throw new Error("model is no passed");
        }
    },
    render:function(){
        let self = this;

        // Create list of models
        this.model.each(function(todoItem){
            let view = new TodoItemView({model:todoItem});
            self.$el.append(view.render().$el);
        });

        return this;
    }
});

