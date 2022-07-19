const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const db = require("../database/models");
const { Op } = require("sequelize");
const productsFilePath = path.join(__dirname, '../Data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// llamda al modelo de productos 

const Productos = db.Product;
const Image = db.Image;
const Class = db.Class;

const productsController={

    index: function(req,res){
        Productos.findAll({
            include : ['Image']
        })
       .then((allProduct) => {
            console.log("consulta exitosa");
            allProduct.forEach(element => {
                console.log(element.dataValues.Image[0].name)
            });
            
            res.render("Productos/allProducts", {products: allProduct});
        });
        
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
        Class.findAll()
        .then(clasificacion => {
            console.log("consulta exitosa");
            res.render("Productos/productCreate", {clasificacion});
        });

        
    },
    store: function(req,res){
        let imagesUploaded = req.files;
        let lastProduct = products[products.length - 1];
        let validResult = validationResult(req);
        if(!validResult.isEmpty()){
            return res.render("Productos/productCreate", {errors: validResult.mapped(), oldData: req.body});
        }
        let newProduct = {
			idProduct: 1,
            category: req.body.category,
            title: req.body.title,
            price: req.body.price,
            smallDescription: req.body.smallDescription,
            detailedDescription: req.body.detailedDescription,
            images: ["Default.jpg"],
            url: req.body.url,
            units: req.body.units,
            colors: req.body.colors.split(','),
            size: req.body.size.split(','),
            classification: req.body.classification,
            reference: req.body.reference
		};
		if (imagesUploaded){
            newProduct.images = [];
            for(let i = 0; i < imagesUploaded.length; i++){
                newProduct.images.push(imagesUploaded[i].filename);
            }			
		}
        if (lastProduct){
            newProduct.idProduct = lastProduct.idProduct + 1;
        }

        Productos.create({
            id: lastProduct,
            title:req.body.title,
            price: req.body.price,
            smallDescription:req.body.smallDescription,
            detailedDescription: req.body.detailedDescription,
            url: req.body.url,
            units: req.body.units,
            colors: req.body.colors,
            sizes: req.body.size,
            reference: req.body.reference,
            class_id: req.body.classification
        })
        .then(confirm => {
            if(confirm){
                console.log("Registro guardado en la base de datos")
            }            
        })   
        
		res.redirect("/products")

    },

    productDetail: function(req,res){
        let id = req.params.id;
        let detalleProducto = null;

        let consultarId = Productos.findByPk(id);
        let consultarTodo = Productos.findAll({
            where: {class_id: 1} 
        });
        let consultaImagenes = Images.findAll({
            where: {product_num: id} 
        });
        let casificacion = Class.findAll({ 
        });
        
        
        Promise.all([consultarId , consultarTodo , consultaImagenes , casificacion])
        .then(([consultarId , consultarTodo , consultaImagenes]) =>{
            console.log(consultarId);
            res.render("Productos/productDetail", {detalleProducto: consultarId, products: consultarTodo , imagenes : consultaImagenes});
        })

        
        
        /*
        /*
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
            res.render("Productos/productDetail", {detalleProducto: detalleProducto, products: products});

        */


    },

    productEdition: function(req,res){
        let id = req.params.id;
        let productoAEditar;

        Productos.findByPk(id,
            {
                include : ['Image'],
                include : ['OrderDetail']

            })
        .then(productoAEditar => {
            console.log(productoAEditar);
            res.render("Productos/productEdition", {productoAEditar: productoAEditar})
        })
        
        /*
        for (let i = 0; i < products.length; i++){
            if (products[i].idProduct == id){
				productoAEditar = products[i]
            }

        }
        */
       
        
    },

    update: function(req,res){
        let idProduct = req.params.id;
        
        let imagesUploaded = req.files;
        let productEdited = {
			idProduct: req.params.id,
            category: req.body.category,
            title: req.body.title,
            price: req.body.price,
            smallDescription: req.body.smallDescription,
            detailedDescription: req.body.detailedDescription,
            images: ["Default.jpg"],
            url: req.body.url,
            units: req.body.units,
            colors: req.body.colors.split(','),
            size: req.body.size.split(','),
            classification: req.body.classification,
            reference: req.body.reference
		};
		if (imagesUploaded){
            productEdited.images = [];
            for(let i = 0; i < imagesUploaded.length; i++){
                productEdited.images.push(imagesUploaded[i].filename);
            }			
		}

        let files = req.files;
        console.log(files);
        //UPDATE DE PRODUCTOS
      
        Productos.update(
            {
                id: req.params.id,
                title:req.body.title,
                price: req.body.price,
                smallDescription:req.body.smallDescription,
                detailedDescription: req.body.detailedDescription,
                url: req.body.url,
                units: req.body.units,
                colors: req.body.colors,
                sizes: req.body.size,
                reference: req.body.reference,
                class_id: (req.body.category == 'Pesca')? 1 : 2
            },
            {
                where: {id: idProduct}
            }
            )
            .then(confirm => {
                if(confirm){
                    console.log("Registro actualizado correctamente en la base de datos")
                }            
            })   

        res.redirect("/products/detail/" + idProduct)
    },

    destroy : function(req, res) {
        let id = req.params.id;

        Productos.destroy({
            where: {id: id},
             force: true
            })
            .then(respuesta =>{
                console.log("registro eliminado correctamente");
                res.redirect("/")
            })
	}
}

module.exports = productsController;