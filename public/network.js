import Todo from './Todo.js'

class Network{

    static getData(listrender){
        fetch('http://localhost:3000/todo')
        .then(res => res.json())
        .then(result => result.map(result => new Todo(result.id, result.title, result.completed)))
        .then(todos => listrender(todos))
    }

    static delete(id, listrender){
        fetch(`http://localhost:3000/todo/delete?id=${id}`)
        .then(res=>res.json())
        .then(result => listrender(result))
    }
}

export default Network;