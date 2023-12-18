const { countReset, timeStamp } = require('console')
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static("html1"))

const mid= (req,res,next) =>{
    console.log(`middle`)
  
    next()
}

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,"html1/exercis1.html" ))
})

app.get('/Routers/:r', (req,res) =>{
    const {r} = req.params
    res.send(`<h1>you have used the router ${r}</h1>`)
})

app.get('/middleware',mid, (req,res) =>{
    const {r} = req.params
    res.send(`<h1>${req.path} </h1> <h1>have use Middleware</h1>`)
})



app.listen(5000)