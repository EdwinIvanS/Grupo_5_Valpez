function userLoguestMiddleware(req, res, next) { 
    res.locals.isLogged = false;
    
    if(req.session && req.session.usuarioLogueqado){
        res.locals.isLogged = true;
    } 
    
    next();
}

module.exports = userLoguestMiddleware;