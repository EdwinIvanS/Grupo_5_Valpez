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
        .then(result => {
            console.log(result)
            let imagesUploaded = [];
            if (req.files){
                for(let i = 0; i < req.files.length; i++){
                    imagesUploaded.push(req.files[i].filename);
                }
                imagesUploaded.forEach(image => {
                    db.Image.create({
                        name: image,
                        product_num: result.id
                    })
                    .then(result => {
                        console.log(result)
                        return res.redirect("/products");
                    })
                });  
            }
            return res.redirect("/products");
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