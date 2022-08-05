const db = require('../../database/models');

const apiControllerUsers = {
    consulta : function(req,res){ 
        db.User.findAll()
        .then(consultaUsuarios => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: consultaUsuarios.length,
                    url: 'api/users'
                },
                data: consultaUsuarios
            }
                res.json(respuesta);
        })
    },
    consultaId : function(req,res){ 
        db.User.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(consultaUsuarioId => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: consultaUsuarioId.length,
                    url: 'api/users/:id'
                },
                data: consultaUsuarioId
            }
                res.json(respuesta);
        })
    }
}

module.exports = apiControllerUsers;