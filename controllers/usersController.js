const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const { Console } = require('console');

const usersFilePath = path.join(__dirname, '../Data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController={

    login: function(req,res){
        res.render("User/login");
    },

    loginProcess: function(req,res){
        let userToLogin = users.find(user => user.email == req.body.email);
        if(userToLogin){
            let verifyPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(verifyPassword){
                let valorProfile ='';
                for (let a = 0; a < users.length; a++) {
                    if(req.body.email == users[a].email){
                        valorProfile=users[a];
                    }                
                }
                req.session.usuarioLogueqado = valorProfile;
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
        if(!validResult.isEmpty()){
            return res.render("User/register", {errors: validResult.mapped(), oldData: req.body});
        }else{
            for(let i = 0; i < users.length; i++) {
                if(req.body.email == users[i].email){
                    return res.render("User/register", {
                        errors: {
                            email: {
                                msg: 'Este email ya está registrado'
                            }
                        }, 
                        oldData: req.body
                    });
                };
            }
                
            let profileImage = req.file;
            let lastUser = users[users.length - 1];
            let newUser = {
                idUser: 1,
                name: req.body.name,
                user: req.body.user,
                email: req.body.email,
                dob: req.body.dob,
                address: req.body.address,
                photo: "DefaultFish.jpg",
                password: bcryptjs.hashSync(req.body.password),
                category: "client"
            };
            if (profileImage){
                newUser.photo = profileImage.filename;
            }
            if (lastUser){
                newUser.idUser = lastUser.idUser + 1;
            }

            users.push(newUser);
            let usersString = JSON.stringify(users, null, ' ');
            fs.writeFileSync(usersFilePath, usersString);

            res.render("User/login");
        }     
    },

    profile: function(req,res){
        console.log(req.session);
        return res.render("User/profile",{
            user : req.session.usuarioLogueqado
        });
    },

    logout: function(req,res){
        req.session.destroy();
        return res.redirect("/");
    }
}

module.exports = usersController;