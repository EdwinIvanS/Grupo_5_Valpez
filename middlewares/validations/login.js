const {body} = require('express-validator');

module.exports = [
    body('email')
        .notEmpty().withMessage("Debes ingresar un correo electrónico").bail()
        .isEmail().withMessage("El correo es inválido"),
    body('password')
        .notEmpty().withMessage("Debes ingresar una contraseña")
]