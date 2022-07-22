const db = require('../database/models');

function userLoguinMiddleware(req, res, next) { 
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.emailLogged;
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
    return next();   
}

module.exports = userLoguinMiddleware;