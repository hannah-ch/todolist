import Todo from './Todo.js'

class List{
    constructor(){
        this.$ul = document.querySelector("ul");
    }

    listRender = (results) =>{
        this.$ul.innerHTML = results.map(data => new Todo(data.id, data.title, data.completed)).map(todo => todo.todoRender()).join('')
    }
}

export default List