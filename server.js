const express = require('express');
const connectDB = require('./config/db')

const app = express()

// Connect DataBase
connectDB()

// Init Middleware
app.use(express.json({extended: false})) // body-parser is included in express



app.get('/', (req, res) => {
    res.json({msg: 'Hello'})
})

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))