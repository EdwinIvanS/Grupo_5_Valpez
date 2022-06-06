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
        let imagesUploaded = req.files;
        let lastProduct = products[products.length - 1];
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

		products.push(newProduct);
		let productsString = JSON.stringify(products, null, ' ');
		fs.writeFileSync(productsFilePath, productsString)
		res.redirect("/products")

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

        res.render("Productos/productDetail", {detalleProducto: detalleProducto, products: products});
    },

    productEdition: function(req,res){
        let id = req.params.id;
        let productoAEditar;
        for (let i = 0; i < products.length; i++){
            if (products[i].idProduct == id){
				productoAEditar = products[i]
            }
        }
        res.render("Productos/productEdition", {productoAEditar: productoAEditar})
    },

    update: function(req,res){
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

		let newProducts = products.filter(product => product.idProduct != req.params.id)
		newProducts.push(productEdited)
		let productsString = JSON.stringify(newProducts, null, ' ');
		fs.writeFileSync(productsFilePath, productsString)
		res.redirect("/products/detail/" + req.params.id)
    },

    destroy : function(req, res) {
		let newProducts = products.filter(product => product.idProduct != req.params.id)
		let productsString = JSON.stringify(newProducts);
		fs.writeFileSync(productsFilePath, productsString)
		res.redirect("/")
	}
}

module.exports = productsController;