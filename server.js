
const express = require('express');
const app = express()

const PORT = process.env.PORT ||3000

app.get ('/inicio', (req, res) => {
    res.send ("hello world !!!! PETICION GET RECIBIDA")
});


app.post ('/usuario', (req, res) => {
    res.send('POST REQUEST RECEIVED')
})

app.put ('/contacto', (req, res) => {
    res.send('UPDATE REQUEST RECEIVED')
})

app.delete ('/test', (req, res) => {
    res.send('<h1> DELETE REQUEST RECEIVED </h1>')
})


app.listen (PORT, () => {
    console.log(`👌 server running on port ${PORT} 🚀`)
});
