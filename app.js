const express = require('express')
const path = require('path')
const app = express()

app.use(express.static("html1"))

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,"html1/exercis1.html" ))
})

app.listen(5000)