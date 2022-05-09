const express = require('express');
const router = express.Router();

const conexion = require('./database/db');
const crud = require('./controllers/crud')

//MOSTRAR REGISTROS
//se conecta a la base de datos creada y accede a users para traer todos los registros
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index.ejs', { results: results })
        }
    })
})

//CREAR REGISTROS
router.get('/create', (req, res) => {
    res.render('create.ejs')
})

//EDITAR REGISTROS
//pasamos parámetro de id de usuario
router.get('/edit/:id', (req, res) => {
    const id = req.params.id
    conexion.query('SELECT * FROM users WHERE id=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('edit.ejs', { user: results[0]})
        }
    })
})

//GUARDAR, desde crud.js
router.post('/save', crud.save)
//ACTUALIZAR
router.post('/update', crud.update)
//BORRAR 
router.post('/delete')


module.exports = router;