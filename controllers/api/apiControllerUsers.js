const db = require('../../database/models');

const apiControllerUsers = {
    consultaUser : function(req,res){ 
        db.User.findAll({
            attributes : ['id', 'name' , 'email']
        })
        .then(consultaUsuarios => {
            let respuesta = {
                count: consultaUsuarios.length,
                users: consultaUsuarios
            }
                res.json(respuesta);
        })
    },

    consultaUserId : function(req,res){ 
        db.User.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(consultaUsuarioId => {
                res.json(consultaUsuarioId);
        })
    }
}

module.exports = apiControllerUsers;