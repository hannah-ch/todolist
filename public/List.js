import Todo from './Todo.js'

class List{
    constructor(data){
        this.data = data;
        this.$ul = document.querySelector("ul");
        this.todos = []
    }

    updateData = (data) =>{
        this.data = data;
        this.todos = this.data.map(data => new Todo(data.id, data.title, data.completed));
        this.listRender();
    }

    newTodo = (data) => {
        const newTodo = new Todo(data.id, data.title, data.completed)
        this.todos.push(newTodo)
        this.listRender()
    }

    deleteTodo(id){
        const index = this.todos.findIndex(todo => todo.id === +id)
        this.todos.splice(index,1)
        this.listRender()   
    }

    listRender(){
        const todoArray = this.todos.map(todo => todo.todoRender()).join('')
        this.$ul.innerHTML = todoArray
        //results.map(data => new Todo(data.id, data.title, data.completed)).map(todo => todo.todoRender()).join('')
    }
}

export default List