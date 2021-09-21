const express = require('express')
const bodyParser=require('body-parser')
const cors=require('cors')


const PORT= process.env.port || 3000;
const api =require('./routes/api')
const app =express()

app.use(bodyParser.json())

app.use(cors())
app.use('/api',api)
app.get('/',function(req,res)
{
    res.send('Hello')
})

app.listen(PORT,function(){
    console.log('Server...'+PORT)
})
