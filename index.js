const express = require('express');
const app = express(); // app represents the running express app

app.get('/', (req, res) => { //route handler
    res.send({ hi: 'there' })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT)