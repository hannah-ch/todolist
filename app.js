const express = require('express')
const app = express()
const port = 3000
const db = require('./db.js')

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use(express.static('public'))

app.get('/todo', (req, res) => {
  db.query(`SELECT * FROM todoData`,(err, rows)=>{
    res.send(rows)
  })   
})

app.post('/todo/write', (req, res)=>{
    db.query(`INSERT INTO todoData (title) values('${req.body.title}')`, (err,rows)=>{
      if (err) {
        console.log(err);
        throw err;
      }
      res.send({id:rows.insertId,
                title:req.body.title,
                completed:false
              });
    })  
})

app.get('/todo/completed', (req,res)=>{
  db.query(`UPDATE todoData SET completed = ${req.query.completed} WHERE id = ${req.query.id}`,(err, rows)=>{
    //console.log(req.query.completed)
    if (err) throw err;
    res.redirect('/todo');
  })
})

app.get('/todo/delete', (req,res)=>{
  db.query(`DELETE FROM todoData WHERE ID = ${req.query.id}`,(err, rows)=>{
    res.send('success');
  })
})

app.get('/todo/update', (req, res)=>{
  db.query(`UPDATE todoData SET title = '${req.query.title}' WHERE ID = ${req.query.id}`, (err,rows)=>{
    if (err) throw err;
    res.redirect('/todo')
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})