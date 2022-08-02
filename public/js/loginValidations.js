window.addEventListener("load", function () {
    let btn = document.querySelector("#btn");
    let errors = {}

    let errorEmail = document.querySelector("span.errorEmail");
    let errorPassword = document.querySelector("span.errorPassword");
    
    btn.addEventListener("click", function (e) {
        let inputEmail = document.querySelector("#email").value;
        let inputPassword = document.querySelector("#password").value;
        

        if(inputEmail == ""){
            errors.email = "Debes ingresar un correo electrónico";
            errorEmail.innerHTML = errors.email;
        }else if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i.test(inputEmail))){ // .isEmail
            errors.email = "El correo es inválido";
            errorEmail.innerHTML = errors.email;
        }else {
            delete errors.email;
            errorEmail.innerHTML = ""
        }

        if(inputPassword == ""){
            errors.password = "Debes ingresar una contraseña";
            errorPassword.innerHTML = errors.password;
        }else{
            delete errors.password;
            errorPassword.innerHTML = ""
        }
        
        if(Object.keys(errors).length > 0){
            e.preventDefault();
        }   

    })
}) 