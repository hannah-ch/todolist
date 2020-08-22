const express = require('express')
const app = express()
const port = 3000
const db = require('./db.js');

app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'));

app.get('/todo', (req, res) => {
  db.query(`SELECT * FROM todoData`,(err, rows)=>{
    res.send(rows)
  })   
})

app.post('/todo/write', (req, res)=>{
    db.query(`INSERT INTO todoData (title) values('${req.body.title}')`, (err,rows)=>{
      console.log(rows)
      res.send({id:rows.insertId,
                title:req.body.title,
                completed:false
              })
    })  
})

app.get('/todo/completed', (req,res)=>{
  db.query(`UPDATE todoData SET completed = ${req.query.completed} WHERE ID = ${req.query.id})`,(err, rows)=>{
    res.sendStatus(200)
  })
})

app.get('/todo/delete', (req,res)=>{
  db.query(`DELETE FROM todoData WHERE ID = ${req.query.id}`,(err, rows)=>{
    console.log(`req.query.id:`,req.query.id)
    res.sendStatus(200);
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})