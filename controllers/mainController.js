
const productosPesca = require("../public/javascript/Productos");

const mainController={
    home: function(req,res){
        res.render("Main/index", {'productosPesca' : productosPesca});
   },

   search: function(req,res){

   }
}
module.exports = mainController;