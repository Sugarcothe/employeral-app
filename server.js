const express = require('express')
const dotenv = require('dotenv')


dotenv.config({path: './config/config.env'})

const app = express()

PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App still on ${process.env.NODE_ENV} is live on ${PORT}`))