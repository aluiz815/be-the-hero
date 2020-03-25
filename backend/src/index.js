const express = require('express')
require('dotenv/config')
const app = express()
const routes = require('./routes')
const cors = require('cors')
var port = process.env.PORT || 3333
app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})