class Todo{
    constructor(id, text, completed){
        this.text = text
        this.id = id
        this.completed = completed        
    }

    todoRender(){
        return `<li data-index="${this.id}"><div class="checkboxDiv">
        <input type="checkbox" class="checkbox" data-key="checkbox" ${this.completed === 1?'checked':''}/></div>
        <div class="contents ${this.completed === 1?'completed':''}" data-key="contents">
        ${this.text}</div>
        <div class="icondiv"><i class="far fa-edit" data-key="icon_edit"></i>
        <i class="far fa-trash-alt" data-key="icon_trash" data-id="${this.id}"></i></div>
        </li>`
    }

}

export default Todo;