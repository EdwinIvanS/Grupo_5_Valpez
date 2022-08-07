const db = require('../../database/models');

const apiControllerProducts = {
    consultaProduct : function(req,res){ 
        let coun 
        db.Product.findAll({
            attributes : ['id', 'title' , 'smallDescription', 'detailedDescription'],        
            include : [{association:'Class'}]
        })
        .then(consultaProductos => { 
            let TotalProductosBase = consultaProductos.length
            let respuesta = {
                meta: {
                    status : 200,
                    total: consultaProductos.length,
                    url: 'api/users'
                },
                data: {TotalProductosBase, consultaProductos}
            }
                res.json(respuesta);
        })
    },
    consultaProductId : function(req,res){ 
        db.Product.findOne({
            include : [{association:'Images'}, {association:'Class'}],
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