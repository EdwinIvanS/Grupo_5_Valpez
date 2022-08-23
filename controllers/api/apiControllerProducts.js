const db = require('../../database/models');
const { sequelize } = require("sequelize");

const apiControllerProducts = {
    consultaProduct : function(req,res){ 
        db.Product.findAll({
            attributes : ['id', 'title' , 'smallDescription'],        
            include : [{association:'Class'}],

        })
        .then(consultaProductos => { 
            let camping = consultaProductos.filter(producto => producto.Class.category == "Camping");
            let pesca = consultaProductos.filter(producto => producto.Class.category == "Pesca");

            let respuesta = {
                count: consultaProductos.length,
                countByCategory: {
                    Pesca: pesca.length,
                    Camping: camping.length
                },
                products: consultaProductos
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
        .then(consultaProductId => {
                res.json(consultaProductId);
        })
    }
}

module.exports = apiControllerProducts;