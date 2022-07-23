const db = require('../database/models');

function userLoguinMiddleware(req, res, next) { 
    /*let emailInCookie = req.cookies.emailLogged;
    if(emailInCookie){
        db.User.findOne({where: {
            email: emailInCookie
        }})
        .then(userFromCookie => {
            if(userFromCookie != null){
                req.session.usuarioLogueado = userFromCookie;
            }

            if(req.session.usuarioLogueado){
                if(req.session.usuarioLogueado.category == 'root'){
                    res.locals.rootUser = true;
                }
                res.locals.isLogged = true;
                return next();
            }
        })   
    }
    return next();     funcion recordar usuario que no funciona */   

    // Valida usuario logueado y usuario root
    res.locals.isLogged = false;

    if(req.session.usuarioLogueado){
        res.locals.isLogged = true;
        if(req.session.usuarioLogueado.category == 'root'){
            res.locals.rootUser = true;
        }
        return next();
    }
    return next();
    
}

module.exports = userLoguinMiddleware;