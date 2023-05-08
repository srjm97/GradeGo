const express = require('express')
const app = express()
const cors = require('cors')
//middlewares
app.use(cors())
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/login', (req, res) => {
    console.log(req.body)
    res.json({status:'ok'})
})
app.listen(1337, ()=>{
    console.log('Server running in http://localhost:1337')

})