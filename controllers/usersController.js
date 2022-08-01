const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');


const usersController={

    userLogin: function(req,res){
        return res.render("User/login");
    },

    login: function(req,res){
        let validResult = validationResult(req);
        if(!validResult.isEmpty()){
            return res.render("User/login", {errors: validResult.mapped()});
        }else{
            db.User.findOne({where: {
                email: req.body.email
            }})
            .then(userToLogin => {
                if(userToLogin != null){
                    let verifyPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                    if(verifyPassword){
                        delete userToLogin.password;
        
                        req.session.usuarioLogueado = userToLogin;
        
                        if(req.body.remember == 'on'){
                            res.cookie('emailLogged', req.body.email, {maxAge: (1000 * 60) * 60})
                        }
                        return res.redirect("profile");
                    }
                    return res.render("User/login", {
                        errors: {
                            credenciales: {
                                msg: "Las credenciales son inválidas"
                            }
                        }
                    });
                }
                return res.render("User/login", {
                    errors: {
                        credenciales: {
                            msg: "Email no está registrado"
                        }
                    }
                });
            })
        }        
    },

    userCreate: function(req,res){
        return res.render("User/register");
    },

    store: function(req,res){
        let validResult = validationResult(req);
        let profileImage = req.file;
        
        if(!validResult.isEmpty()){
            return res.render("User/register", {errors: validResult.mapped(), oldData: req.body});
        }else{
            db.User.findOne({where: {
                email: req.body.email
            }})
            .then(result => {
                if(result != null){
                    return res.render("User/register", {
                        errors: {
                            email: {
                                msg: 'Este email ya está registrado'
                            }
                        }, 
                        oldData: req.body
                    });
                }else {
                    db.User.create({
                        name: req.body.name,
                        user: req.body.user,
                        email: req.body.email,
                        dob: req.body.dob,
                        address: req.body.address,
                        photo: profileImage ? profileImage.filename : "DefaultFish.jpg",
                        password: bcryptjs.hashSync(req.body.password),
                    })
                    .then(result => {
                        return res.render("User/login");
                    })
                }
            })
            
        }     
    },

    profile: function(req,res){
        return res.render("User/profile",{
            user : req.session.usuarioLogueado
        });
    },

    userEdition: function(req,res){
        return res.render("User/edit",{
            user : req.session.usuarioLogueado
        });
    },

    update: function(req,res){
        let validResult = validationResult(req);
        let profileImage = req.file;
        
        if(!validResult.isEmpty()){
            return res.render("User/edit", {errors: validResult.mapped(), user : req.session.usuarioLogueado});
        }else{
            db.User.update({
                name: req.body.name,
                user: req.body.user,
                email: req.body.email,
                dob: req.body.dob,
                address: req.body.address,
                photo: profileImage ? profileImage.filename : "DefaultFish.jpg",
                password: bcryptjs.hashSync(req.body.password),
            },
            {
                where:{
                    id: req.session.usuarioLogueado.id
                }
            })
            .then(result => {
                return res.redirect("/users/profile");
            })
        }
    },

    destroy: function(req,res){
        db.User.destroy({
            where: {id: req.session.usuarioLogueado.id},
        })
        .then(respuesta =>{
            console.log("registro eliminado correctamente");
            res.clearCookie('emailLogged')
            req.session.destroy();
            return res.redirect("/")
        })
    },

    logout: function(req,res){
        res.clearCookie('emailLogged')
        req.session.destroy();
        return res.redirect("/");
    }
}

module.exports = usersController;