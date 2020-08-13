const express = require('express')
const app = express()
const port = 3000
const fs = require("fs");

app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'));

app.get('/', (req, res) => {
  fs.readdir('./data',(err,list)=>{
      res.send(list)
  })
})

app.get('/todo', (req, res) => {
  fs.readdir('./data',(err,list)=>{
      res.send(list)
  })
})

app.get('/todo/write', (req, res)=>{
    fs.writeFile(`./data/${req.query.id}`, req.query.title,()=>{
      //res.redirect('/')
      res.send('***')
    })
})

app.post('/todo/update', (req,res)=>{
  console.log(req.body)
  // fs.writeFile(`./data/${req.body.title}`, `[{title:${req.body.title}, completed:${req.body.completed}}]`,()=>{
    res.redirect('/')
  // })
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})