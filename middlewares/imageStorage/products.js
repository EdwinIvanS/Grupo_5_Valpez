const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../../public/img/Products'));
    },
    filename: function(req, file, cb){
        cb(null, "img - " + Date.now() + path.extname(file.originalname));
    }
});

module.exports = multer({storage});