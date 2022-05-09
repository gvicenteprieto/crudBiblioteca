//aquí los parámetros de conexión

const mysql = require('mysql');

const conexion = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db'
})

conexion.connect((error) =>{
    if (error) {
        console.log(`el error de conexión es ${error}`)
        return 
    }
    console.log('Conectado a la Base de Datos')
})

module.exports = conexion;
