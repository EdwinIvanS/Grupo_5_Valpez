
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../Data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController={
    home: function(req,res){
        res.render("Main/index", {products : products});
   },

   search: function(req,res){

   }
}
module.exports = mainController;