function rootMiddleware(req, res, next) {    
    if(!req.session.usuarioLogueado){
        return res.redirect("../../users/login");
    }
    else if(req.session.usuarioLogueado && req.session.usuarioLogueado.category == 'client') {
        return res.redirect("../../users/profile");
    }    
    next();
}

module.exports = rootMiddleware;