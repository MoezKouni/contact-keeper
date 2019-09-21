const express = require('express');

const app = express()
const PORT = process.env.PORT || 5000

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

app.get('/', (req, res) => {
    res.json({msg: 'Hello'})
})


app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))