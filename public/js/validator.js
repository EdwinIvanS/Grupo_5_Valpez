window.addEventListener("load", function () {
    let userForm = document.querySelector("form.userForm");
    let errors = {}
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    let inputName = document.querySelector("#name").value;
    let inputUser = document.querySelector("#user").value;
    let inputEmail = document.querySelector("#email").value;
    let inputDob = document.querySelector("#dob").value;
    let inputPhoto = document.querySelector("#photo").value;
    let inputPassword = document.querySelector("#password").value;
    let inputConfirmPassword = document.querySelector("#confirmPassword").value;

    let errorName = document.querySelector("span.errorName");
    let errorUser = document.querySelector("span.errorUser");
    let errorEmail = document.querySelector("span.errorEmail");
    let errorDob = document.querySelector("span.errorDob");
    let errorPhoto = document.querySelector("span.errorPhoto");
    let errorPassword = document.querySelector("span.errorPassword");
    let errorConfirmPassword = document.querySelector("span.errorConfirmPassword");

    userForm.addEventListener("submit", function (e) {
        

        if(inputName == "") {
            errors.name = "Debes ingresar nombre completo";
            errorName.innerHTML = errors.name;
        }else if (inputName.length < 2){
            errors.name = "El nombre debe tener mínimo 2 caracteres";
            errorName.innerHTML = errors.name;
        }

        if(inputUser == ""){
            errors.user = "Debes ingresar usuario";
            errorUser.innerHTML = errors.user;
        }else if (inputUser.length < 4){
            errors.user = "El usuario debe contener al menos 4 caracteres";
            errorUser.innerHTML += errors.user;
        }

        if(inputEmail == ""){
            errors.email = "Debes ingresar un correo electrónico";
            errorEmail.innerHTML = errors.email;
        }else if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i.test(inputEmail))){ // .isEmail
            errors.email = "El correo es inválido";
            errorEmail.innerHTML = errors.email;
        }

        if(inputDob == ""){
            errors.dob = "Debes ingresar fecha de nacimiento";
            errorDob.innerHTML = errors.dob;
        }

        if(!allowedExtensions.exec(inputPhoto)){
            errors.photo = 'Las extensiones del archivo permitidas son: ".jpg", ".png", ".gif", ".jpeg"';
            errorPhoto.innerHTML = errors.photo;
        }

        if(inputPassword == ""){
            errors.password = "Debes ingresar una contraseña";
            errorPassword.innerHTML = errors.password;
        }else if (inputPassword){ // .isAlphanumeric
            errors.password = "La contraseña debe combinar letras y números";
            errorPassword.innerHTML = errors.password;
        }else if (inputPassword.length < 6 || inputPassword.length > 10){
            errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
            errorPassword.innerHTML = errors.password;
        }

        if(inputConfirmPassword != inputPassword){
            errors.confirmPassword = "Las contraseñas debe coincidir";
            errorConfirmPassword.innerHTML = errors.confirmPassword;
        }

        console.log(inputEmail)
        
        if(Object.keys(errors).length > 1){
            e.preventDefault();
            console.log('hola')
        }   

    })

    //let userLoginForm = document.querySelector("form.userLoginForm");
    //let productForm = document.querySelector("form.productForm");
/*
    userLoginForm.addEventListener("submit", function (e) {
        let errors = [];
        let inputEmail = document.querySelector("#email");
        let inputPassword = document.querySelector('#password');
        e.preventDefault();

    })

    productForm.addEventListener("submit", (e) => {
        let errors = [];
        let inputTitle = document.querySelector('#title');
        let inputPrice = document.querySelector('#price');
        let inputSmallDescription = document.querySelector('#smallDescription');
        let inputImages = document.querySelector('#images');
        let inputUnits = document.querySelector('#units');
        let inputColors = document.querySelector('#colors');
        let inputSize = document.querySelector('#size');
        e.preventDefault();

    }) */
}) 