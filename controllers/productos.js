
const productosController={

    productCart: function(req,res){
        res.render("Productos/productCart");
    },

    productCreate: function(req,res){
        res.render("Productos/productCreate");
    },

    productDetail: function(req,res){
        res.render("Productos/productDetail");
    }
}

module.exports = productosController;