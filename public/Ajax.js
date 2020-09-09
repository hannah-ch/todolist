class Ajax{
    static getData(listRender) {
        fetch('http://localhost:3000/todo')
            .then(res => res.json())
            .then(result => listRender(result))
    }
    
    static deleteData(id, listRender){
        fetch(`http://localhost:3000/todo/delete?id=${id}`)
        .then(res => res.json())
        .then(result => listRender(result))
    }
}

export default Ajax

