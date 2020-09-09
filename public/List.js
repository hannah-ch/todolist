import Todo from './Todo.js'

class List{
    constructor(){
    }

    listRender(results){
        const ul = document.querySelector('ul')
        ul.innerHTML = results.map(data => new Todo(data.id, data.title, data.completed)).map(todo => todo.todoRender()).join('')
    }
}

export default List