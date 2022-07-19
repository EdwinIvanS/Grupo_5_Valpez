const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');


const usersController={

    login: function(req,res){
        res.render("User/login");
    },

    loginProcess: function(req,res){
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        let userToLogin = users.find(user => user.email == req.body.email);
        if(userToLogin){
            let verifyPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(verifyPassword){
                delete userToLogin.password;

                req.session.usuarioLogueado = userToLogin;

                if(req.body.remember){
                    res.cookie('emailLogged', req.body.email, {maxAge: (1000 * 60) * 60})
                }
                //return res.redirect("profile");
                return res.redirect("profile");
            }
            return res.render("User/login", {
                errors: {
                    email: {
                        msg: "Las credenciales son inválidas"
                    }
                }
            });
        }
        return res.render("User/login", {
            errors: {
                email: {
                    msg: "Email no está registrado"
                }
            }
        });
    },

    register: function(req,res){
        res.render("User/register");
    },

    userCreate: function(req,res){
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
                        res.render("User/login");
                    })
                }
            })
            
        }     
    },

    profile: function(req,res){
        //console.log(req.session);
        return res.render("User/profile",{
            user : req.session.usuarioLogueado
        });
    },

    logout: function(req,res){
        res.clearCookie('emailLogged')
        req.session.destroy();
        return res.redirect("/");
    }
}

module.exports = usersController;