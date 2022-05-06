const registroController={

    login: function(req,res){
        res.render("User/login");
    },

    register: function(req,res){
        res.render("User/register");
    },

}
module.exports = registroController;