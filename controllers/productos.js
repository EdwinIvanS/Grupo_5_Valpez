const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productss = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const products = require("../public/javascript/Productos");

const productosController={

    productCart: function(req,res){
        res.render("Productos/productCart");
    },

    productCreate: function(req,res){
        res.render("Productos/productCreate");
    },

    productDetail: function(req,res){
        let idProducto = req.params.id;
        let detalleProducto = null;
        
        for (let i = 0; i < productss.length; i++) {
            if (productss[i].idProducto == idProducto ) {
                detalleProducto = productss[i];
            }
        }

        console.log(detalleProducto);
        res.render("Productos/productDetail", {detalleProducto: detalleProducto});
    },

    productEdition: function(req,res){
        let idProducto = req.params.id;
        res.render("Productos/productEdition", {idProducto: idProducto})
    }
}

module.exports = productosController;