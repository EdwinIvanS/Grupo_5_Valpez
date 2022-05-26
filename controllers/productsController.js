const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../Data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController={

    index: function(req,res){
        res.render("Productos/allProducts", {products: products});
    },

    camping: function(req,res){
        let campingProducts = [];
        for(let i = 0; i < products.length; i++){
            if(products[i].category == "Camping"){
                campingProducts.push(products[i])
            }
        }
        res.render("Productos/campingProducts", {campingProducts: campingProducts});
    },

    fishing: function(req,res){
        let fishingProducts = [];
        for(let i = 0; i < products.length; i++){
            if(products[i].category == "Pesca"){
                fishingProducts.push(products[i])
            }
        }
        res.render("Productos/fishingProducts", {fishingProducts: fishingProducts});
    },

    productCart: function(req,res){
        res.render("Productos/productCart");
    },

    productCreate: function(req,res){
        res.render("Productos/productCreate");
    },
    store: function(req,res){

    },

    productDetail: function(req,res){
        let id = req.params.id;
        let detalleProducto = null;
        for (let i = 0; i < products.length; i++) {
            if (products[i].idProduct == id ) {
                detalleProducto = products[i];
            }
        }
        
        for(let i = 0; i <= 3 ; i++){
            if(detalleProducto.images[i]== undefined){
                detalleProducto.images[i] = "Default.jpg"
            }
        }

        res.render("Productos/productDetail", {detalleProducto: detalleProducto});
    },

    productEdition: function(req,res){
        let id = req.params.id;
        res.render("Productos/productEdition", {id: id})
    },

    update: function(req,res){

    },

    destroy: function(req,res){

    }
}

module.exports = productsController;