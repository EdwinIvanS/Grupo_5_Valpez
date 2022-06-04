const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');

const usersFilePath = path.join(__dirname, '../Data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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
        let validResult = validationResult(req);
        if(!validResult.isEmpty()){
            res.render("User/register", {errors: validResult.mapped(), oldData: req.body});
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
            let newUser = {
                idUser: users.length + 1,
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

            users.push(newUser);
            let usersString = JSON.stringify(users, null, ' ');
            fs.writeFileSync(usersFilePath, usersString)
            res.redirect("/users/login")
        }     
    }
}

module.exports = usersController;