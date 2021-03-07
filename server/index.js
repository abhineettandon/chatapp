require('dotenv').config()
const express = require('express')

const app = express()

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started at port ${process.env.SERVER_PORT}`)
})