$(document).ready(function(){

    let todoItems = new TodoItems ([
        new TodoItem({description:"TodoItem 1"}),
        new TodoItem({description:"TodoItem 2"}),
        new TodoItem({description:"TodoItem 3"}),
        ]);

    let todoItemsView = new TodoItemsView({model:todoItems});

    //render the todo item to dom 
    $("body").append(todoItemsView.render().$el);

});
