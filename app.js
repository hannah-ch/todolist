const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;


app.use(express.static('public'))

app.get('/read', (req, res) => {
    fs.readFile('todos.txt', 'utf8', (err, data) => {
        res.send(data)
    })
})

app.get('/write', (req, res) => {
    const data = { //서버에서 받은 object 그대로 만들어줘야 list가 만들어지도록 설계되어있으므로, 포맷을 맞춰준다
        userId: 1,
        id: 100,
        title: req.query.title,
        completed: req.query.completed
    }
    fs.appendFile('todos.txt', JSON.stringify(data) + `\n`, () => {
        res.send(data)
    })
})

app.listen(3000, function () {
    console.log('!!!')
})