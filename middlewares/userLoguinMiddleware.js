const fs = require('fs');
const path = require("path");

const usersFilePath = path.join(__dirname, '../Data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function userLoguinMiddleware(req, res, next) { 
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.emailLogged;
    let userFromCookie = users.find(user => user.email == emailInCookie);

    if(userFromCookie){
        req.session.usuarioLogueado = userFromCookie
    }

    if(req.session.usuarioLogueado){
        res.locals.isLogged = true;
        if(req.session.usuarioLogueado.category == 'root'){
            res.locals.rootUser = true;
        }
    }

    
    
    next();
}

module.exports = userLoguinMiddleware;