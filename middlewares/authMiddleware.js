// valida si el usuario no esta en session

function authMiddleware(req, res, next) {    
    if(!req.session.usuarioLogueqado){
        return res.redirect("login");
    }    
    next();
}

module.exports = authMiddleware;