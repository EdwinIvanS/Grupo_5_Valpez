
const productosPesca = require("../public/javascript/Productos");

const principalController={
    home: function(req,res){
        res.render("Main/index", {'productosPesca' : productosPesca});
   }
}
module.exports = principalController;