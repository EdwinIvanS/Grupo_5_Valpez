const db = require('../../database/models');

const apiControllerProducts = {
    consultaProduct : function(req,res){ 
        db.Product.findAll()
        .then(consultaProductos => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: consultaProductos.length,
                    url: 'api/users'
                },
                data: consultaProductos
            }
                res.json(respuesta);
        })
    },
    consultaProductId : function(req,res){ 
        db.Product.findOne({
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

module.exports = apiControllerProducts;