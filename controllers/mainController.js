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

    },
    
    aboutUs: function(req,res){
        res.render("Links/aboutUs");
    },

    conditions: function(req,res){
        res.render("Links/conditions");
    },

    contacts: function(req,res){
        res.render("Links/contacts");
    },

    payment: function(req,res){
        res.render("Links/payment");
    },

    privacy: function(req,res){
        res.render("Links/privacy");
    },

    warranty: function(req,res){
        res.render("Links/warranty");
    },
    whereToCamping: function(req,res){
        res.render("Links/whereToCamping");
    },
    whereToFish: function(req,res){
        res.render("Links/whereToFish");
    },

    adventures: function(req,res){
        res.render("Links/adventures");
    }
}

module.exports = mainController;