// valida si el usuario esta en session

function guestMiddleware(req, res, next) {    
    if(req.session.usuarioLogueqado){
        return res.redirect("profile");
    }    
    next();
}

module.exports = guestMiddleware;