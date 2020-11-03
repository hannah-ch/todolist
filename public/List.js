import Todo from './Todo.js'

class List{
    constructor(data){
        this.data = data;
        this.$ul = document.querySelector("ul");
        this.todos = []
    }

    updateData = (data) => {
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

    updateForm(text, id){
        return `
            <input type="text" id="textEdit" name="updateText" value=${text}>
            <input type="submit" value="submit" class="submitButton" data-key="submitButton" data-id=${id}>
            <input type="button" value="cancel" class="cancelButton" data-key="cancelButton">
            `
    }

    updateClick(target, id){
        const text = target.parentElement.parentElement.children[1];
        const index = this.todos.findIndex(todo => todo.id === +id)
        const originalText = this.todos[index].text
        text.innerHTML = this.updateForm(originalText, id)
    }

    updateTodo(id, newTodoText){
        const index = this.todos.findIndex(todo => todo.id === +id)
        this.todos[index].text = newTodoText
        this.listRender()
    }

    completeTodo(id){
        const index = this.todos.findIndex(todo => todo.id === +id)
        this.todos[index].completed = !this.todos[index].completed
        this.listRender()
    }

    listRender(){
        const todoArray = this.todos.map(todo => todo.todoRender()).join('')
        this.$ul.innerHTML = todoArray
    }
}

export default List