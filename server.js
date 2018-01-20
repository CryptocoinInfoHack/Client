const page = require('page')
const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

const cors = require('cors');

app.use(cors())
app.use(express.static('./public'))

app.get('/', (req, res) => {
   res.sendFile('hi') 
})

app.listen(PORT, (req, res) => console.log(`Listening on port ${PORT}`)) 
