const {validationResult} = require('express-validator');
const db = require("../database/models");


const productsController={

    index: function(req,res){
        db.Product.findAll({
            include : ['Images']
        })
        .then((allProduct) => {
            return res.render("Productos/allProducts", {products: allProduct});
        });
        
    },

    camping: function(req,res){
        db.Product.findAll({
            include : [{association:'Images'}, {association:'Class'}],
        })
        .then((allProducts) => {
            let campingProducts = allProducts.filter(producto => {
                return producto.Class.category == 'Camping'
            })
            return res.render("Productos/campingProducts", {products: campingProducts});
        });
        
    },

    fishing: function(req,res){
        db.Product.findAll({
            include : [{association:'Images'}, {association:'Class'}],
        })
        .then((allProducts) => {
            let fishingProducts = allProducts.filter(producto => {
                return producto.Class.category == 'Pesca'
            })
            return res.render("Productos/fishingProducts", {products: fishingProducts});
        });
        
    },

    productCart: function(req,res){
        return res.render("Productos/productCart");
    },

    productCreate: function(req,res){
        db.Class.findAll()
        .then(classes => {
            return res.render("Productos/productCreate", {classes});
        });

        
    },
    store: function(req,res){
        let validResult = validationResult(req);
        if(!validResult.isEmpty()){
            db.Class.findAll()
            .then(classes => {
                return res.render("Productos/productCreate", {errors: validResult.mapped(), oldData: req.body, classes});
            });
        }

        db.Product.create({
            title: req.body.title,
            price: req.body.price,
            smallDescription: req.body.smallDescription,
            detailedDescription: req.body.detailedDescription,
            url: req.body.url,
            units: req.body.units,
            colors: req.body.colors,
            sizes: req.body.size,
            reference: req.body.reference,
            class_id: req.body.classification,
        })
        .then(productCreated => {
            let imagesUploaded = [];
            if (req.files.length > 0){
                for(let i = 0; i < req.files.length; i++){
                    imagesUploaded.push(req.files[i].filename);
                }  
            }else{
                imagesUploaded.push('default.png')
            }

            imagesUploaded.forEach(image => {
                db.Image.create({
                    name: image,
                    product_num: productCreated.id
                })
                .then(result => {
                    console.log(result)
                    return res.redirect("/products");
                })
            })

        })
    },

    productDetail: function(req,res){
        db.Product.findOne({
            include : [{association:'Images'}, {association:'Class'}],
            where: {
                id: req.params.id
            }
        })
        .then(productSelected =>{
            db.Product.findAll({
                include : ['Images'],
                where: {
                    class_id: productSelected.class_id
                },
                limit: 3
            })
            .then(productsRelated => {
                return res.render("Productos/productDetail", {products: productsRelated, productSelected});
            })
        })
    },

    productEdition: function(req,res){
        let productToEdit = db.Product.findOne({
            include : [{association:'Images'}, {association:'Class'}],
            where: {
                id: req.params.id
            }
        })

        let classes = db.Class.findAll()

        Promise.all([productToEdit, classes])
        .then(([productToEdit, classes]) => {
            return res.render("Productos/productEdition", {productSelected: productToEdit, classes})
        })
    },

    update: function(req,res){
        let validResult = validationResult(req);
        if(!validResult.isEmpty()){
            let productToEdit = db.Product.findOne({
                include : [{association:'Images'}, {association:'Class'}],
                where: {
                    id: req.params.id
                }
            })
    
            let classes = db.Class.findAll()
    
            Promise.all([productToEdit, classes])
            .then(([productToEdit, classes]) => {
                return res.render("Productos/productEdition", {errors: validResult.mapped(), productSelected: productToEdit, classes})
            })
        }

        db.Product.update({
            title: req.body.title,
            price: req.body.price,
            smallDescription: req.body.smallDescription,
            detailedDescription: req.body.detailedDescription,
            url: req.body.url,
            units: req.body.units,
            colors: req.body.colors,
            sizes: req.body.size,
            reference: req.body.reference,
            class_id: req.body.classification,
        },
        {
            where: {id: req.params.id}
        })
        .then(productUpdated => {
            db.Image.destroy({
                where: {product_num: req.params.id}
            })
            .then(imagesDeleted => {
                let imagesUploaded = [];
                
                if (req.files.length > 0){
                    for(let i = 0; i < req.files.length; i++){
                        imagesUploaded.push(req.files[i].filename);
                    }
                }else{
                    
                    imagesUploaded.push('default.png')
                    
                }

                imagesUploaded.forEach(image => {
                    db.Image.create({
                        name: image,
                        product_num: req.params.id
                    })
                    .then(result => {
                        return res.redirect("/products/detail/" + req.params.id);
                    })
                }) 
            })
        })
    },

    destroy : function(req, res) {
        db.Products.destroy({
            where: {id: req.params.id},
        })
        .then(respuesta =>{
            console.log("registro eliminado correctamente");
            return res.redirect("/")
        })
	}
}

module.exports = productsController;