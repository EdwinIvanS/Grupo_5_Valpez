const db = require("../database/models");

const mainController={
    home: function(req,res){
        db.Product.findAll({
            include : ['Images']
        })
            .then((allProduct) => {
                console.log(allProduct)
                res.render("Main/index", {products: allProduct});
            });
        
   },

    search: function(req,res){

    }
}
module.exports = mainController;