const db = require("../database/models");

const mainController={
    home: function(req,res){
        db.Product.findAll({
            include : ['Images'],
            order: [['id', 'DESC']],
            limit: 3
        })
            .then((newProducts) => {
                res.render("Main/index", {products: newProducts});
            });
    },

    search: function(req,res){

    }
}
module.exports = mainController;