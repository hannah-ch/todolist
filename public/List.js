class List{
    constructor(){
        this.ul = document.querySelector("ul")
    }

    listRender(results){
        console.log(this)  
        // this.$ul.innerHTML = results.map(data => new Todo(data.id, data.title, data.completed))
        // .map(todo => todo.todoRender()).join('')
    }
}

export default List