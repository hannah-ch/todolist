const fs = require('fs')

fs.readdir('./public', (err, list) => {
    console.log(list)
})

