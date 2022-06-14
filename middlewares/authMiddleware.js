// valida si el usuario esta autenticado

function guestMiddleware(req, res, next) {
    
    if(req.session.usuarioLogueqado !== undefined){
        next;
    } else {
            console.log("Logueado exitosamente");
        }
}

module.exports = guestMiddleware;