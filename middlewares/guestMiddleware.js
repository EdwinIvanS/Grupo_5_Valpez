
// valida si el usuario no se ha autenticado

function guestMiddleware(req, res, next) {
    
    if(req.session.usuarioLogueqado == undefined){
        next;
    } else {
            console.log("No te has logueado");
        }
}

module.exports = guestMiddleware;