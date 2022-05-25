const usersController={

    login: function(req,res){
        res.render("User/login");
    },

    logged: function(req,res){

    },

    register: function(req,res){
        res.render("User/register");
    },

    userCreate: function(req,res){

    }
}

module.exports = usersController;