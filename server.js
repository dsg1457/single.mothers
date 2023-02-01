require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const { logger } =require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3500

console.log(process.env.NODE_ENV)
app.use(logger)

app.use(express.json())

app.use(cookieParser())


app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/root'))
app.use('/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))