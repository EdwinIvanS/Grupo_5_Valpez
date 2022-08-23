const db = require('../../database/models');

const apiControllerClasses = {
    consultaClass : function(req,res){ 
        db.Class.findAll({
            attributes : ['id', 'name' , 'category']
        })
        .then(consultaClasses => {
            let respuesta = {
                count: consultaClasses.length,
                classes: consultaClasses
            }
                res.json(respuesta);
        })
    }
}

module.exports = apiControllerClasses;