const conexion = require('../database/db')

//método save que se encuentra en el formulario en create.ejs
exports.save = (req, res) => {
    //user y rol los definimos en el formulario
    const user = req.body.user
    const rol = req.body.rol
    console.log({
        "Usuario agregado": user,
        "Rol asignado": rol
    })

    //inserto en la tabla user y con qué valores
    conexion.query('INSERT INTO users SET ?', { user, rol }, (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect('/');
        }
    })
}

//capturamos los valores por id
exports.update = (req, res) => {
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.id;
    //se hace la conexión y se pasan los valores en un array con objetos
    conexion.query('UPDATE users SET ? WHERE id = ?', [{ user:user, rol:rol }, id], (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect('/');
        }
    })
};