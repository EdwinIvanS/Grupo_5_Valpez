const db = require('../../database/models');

const apiControllerUsers = {
    consulta : function(req,res){ 
        db.User.findAll({
            attributes : ['id', 'name' , 'email']
        })
        .then(consultaUsuarios => {
            let TotalUsuarios= consultaUsuarios.length
            let respuesta = {
                meta: {
                    status : 200,
                    total: consultaUsuarios.length,
                    url: 'api/users'
                },
                data: {TotalUsuarios,consultaUsuarios}
            }
                res.json(respuesta);
        })
    },
    consultaId : function(req,res){ 
        db.User.findOne({
            attributes : ['id', 'name', 'user', 'photo'],
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