//const validator = require("validator");

window.addEventListener("load", function () {
    let userForm = document.querySelector("form.userForm");
    //let userLoginForm = document.querySelector("form.userLoginForm");
    //let productForm = document.querySelector("form.productForm");
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    let inputName = document.querySelector("#name").value;
    let inputUser = document.querySelector("#user").value;
    let inputEmail = document.querySelector("#email").value;
    let inputDob = document.querySelector("#dob").value;
    let inputPhoto = document.querySelector("#photo").value;
    let inputPassword = document.querySelector("#password").value;
    let inputConfirmPassword = document.querySelector("#confirmPassword").value;

    let errorName = document.querySelector("div.errorName");
    let errorUser = document.querySelector("div.errorUser");
    let errorEmail = document.querySelector("div.errorEmail");
    let errorDob = document.querySelector("div.errorDob");
    let errorPhoto = document.querySelector("div.errorPhoto");
    let errorPassword = document.querySelector("div.errorPassword");
    let errorConfirmPassword = document.querySelector("div.errorConfirmPassword");

    console.log(userForm)
    userForm.addEventListener("submit", function (e) {
        

        if(validator.isEmpty(inputName)) {
            errors.name = "Debes ingresar nombre completo";
            errorName.innerHTML += errors.name;
        }else if (!validator.isLength(inputName, {min:2})){
            errors.name = "El nombre debe tener mínimo 2 caracteres";
            errorName.innerHTML += errors.name;
        }

        if(validator.isEmpty(inputUser)){
            errors.user = "Debes ingresar usuario";
            errorUser.innerHTML += errors.user;
        }else if (!validator.isLength(inputUser, {min:4})){
            errors.user = "El usuario debe contener al menos 4 caracteres";
            errorUser.innerHTML += errors.user;
        }

        if(validator.isEmpty(inputEmail)){
            errors.email = "Debes ingresar un correo electrónico";
            errorEmail.innerHTML += errors.email;
        }else if (!validator.isEmail(inputEmail)){
            errors.email = "El correo es inválido";
            errorEmail.innerHTML += errors.email;
        }

        if(validator.isEmpty(inputDob)){
            errors.dob = "Debes ingresar fecha de nacimiento";
            errorDob.innerHTML += errors.dob;
        }

        if(!allowedExtensions.exec(inputPhoto)){
            errors.photo = 'Las extensiones del archivo permitidas son: ".jpg", ".png", ".gif", ".jpeg"';
            errorPhoto.innerHTML += errors.photo;
        }

        if(validator.isEmpty(inputPassword)){
            errors.password = "Debes ingresar una contraseña";
            errorPassword.innerHTML += errors.password;
        }else if (!validator.isAlphanumeric(inputPassword)){
            errors.password = "La contraseña debe combinar letras y números";
            errorPassword.innerHTML += errors.password;
        }else if (!validator.isLength(inputPassword, {min: 6, max: 10})){
            errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
            errorPassword.innerHTML += errors.password;
        }

        if(inputConfirmPassword != inputPassword){
            errors.confirmPassword = "Las contraseñas debe coincidir";
            errorConfirmPassword.innerHTML += errors.confirmPassword;
        }
        
        if(Object.keys(errors).length > 0){
            e.preventDefault();
        }   

        console.log('hola')

    })
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