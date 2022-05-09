
const productosController={

    productCart: function(req,res){
        res.render("Productos/productCart");
    },

    productCreate: function(req,res){
        res.render("Productos/productCreate");
    },

    productDetail: function(req,res){
        let idProducto = req.params.id;
        res.render("Productos/productDetail", {idProducto: idProducto});
    },

    productEdition: function(req,res){
        let idProducto = req.params.id;
        res.render("Productos/productEdition", {idProducto: idProducto})
    }
}

module.exports = productosController;