class Ajax{

    static URL = 'http://localhost:3000'

    static getData(updateData) {
        fetch(`${Ajax.URL}/todo`)
            .then(res => res.json())
            .then(result => updateData(result))
    }
    
    static deleteData(id, updateData){
        fetch(`${Ajax.URL}/todo/delete?id=${id}`)
        .then(res => res.json())
        .then(result => updateData(result))
    }

    static addTodo(newTodoText, addTodo){
        fetch(`${Ajax.URL}/todo/write`, {
            method: 'POST',
            headers:{
                "Accept": "application/json",
                "Content-type": "application/json; charset = UTF-8"
            },
              body: JSON.stringify({title: `${newTodoText}`})
            })
        .then(res => res.json())
        .then(result => addTodo(result))
    }
}

export default Ajax

