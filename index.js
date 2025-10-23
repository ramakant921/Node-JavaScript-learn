require('dotenv').config()
const express = require('express')
const app = express()
const port = 6060

app.get('/', (req, res) => {
  res.send('Spodormon is saying Hello World!')
})

app.get('/twitter',(req,res) =>{
    res.send("spodormon.com")
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login niggaa.......</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Subscribe to Spodormon channel on YouTube nigaaassssssss..</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${port}`)
})