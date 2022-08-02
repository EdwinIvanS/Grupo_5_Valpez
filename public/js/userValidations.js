window.addEventListener("load", function () {
    let btn = document.querySelector("#btn");
    let errors = {}
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    let errorName = document.querySelector("span.errorName");
    let errorUser = document.querySelector("span.errorUser");
    let errorEmail = document.querySelector("span.errorEmail");
    let errorDob = document.querySelector("span.errorDob");
    let errorPhoto = document.querySelector("span.errorPhoto");
    let errorPassword = document.querySelector("span.errorPassword");
    let errorConfirmPassword = document.querySelector("span.errorConfirmPassword");


    
    btn.addEventListener("click", function (e) {
        let inputName = document.querySelector("#name").value;
        let inputUser = document.querySelector("#user").value;
        let inputEmail = document.querySelector("#email").value;
        let inputDob = document.querySelector("#dob").value;
        let inputPhoto = document.querySelector("#photo").value;
        let inputPassword = document.querySelector("#password").value;
        let inputConfirmPassword = document.querySelector("#confirmPassword").value;
        console.log(inputName)
        if(inputName == "") {
            errors.name = "Debes ingresar nombre completo";
            errorName.innerHTML = errors.name;
        }else if (inputName.length < 2){
            errors.name = "El nombre debe tener mínimo 2 caracteres";
            errorName.innerHTML = errors.name;
        }else {
            delete errors.name;
            errorName.innerHTML = ""
        }

        if(inputUser == ""){
            errors.user = "Debes ingresar usuario";
            errorUser.innerHTML = errors.user;
        }else if (inputUser.length < 4){
            errors.user = "El usuario debe contener al menos 4 caracteres";
            errorUser.innerHTML += errors.user;
        }else {
            delete errors.user;
            errorUser.innerHTML = ""
        }

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

        if(inputDob == ""){
            errors.dob = "Debes ingresar fecha de nacimiento";
            errorDob.innerHTML = errors.dob;
        }else {
            delete errors.dob;
            errorDob.innerHTML = ""
        }

        if(inputPhoto && !allowedExtensions.exec(inputPhoto)){
            errors.photo = 'Las extensiones del archivo permitidas son: ".jpg", ".png", ".gif", ".jpeg"';
            errorPhoto.innerHTML = errors.photo;
        }else{
            delete errors.photo;
            errorPhoto.innerHTML = ""
        }

        if(inputPassword == ""){
            errors.password = "Debes ingresar una contraseña";
            errorPassword.innerHTML = errors.password;
        }else if (!(/^(?=\w*\d)(?=\w*[a-z])\S{6,10}$/i.test(inputPassword))){ // .isAlphanumeric
            errors.password = "La contraseña debe combinar letras y números y debe contener entre 6 y 10 caracteres";
            errorPassword.innerHTML = errors.password;
        }else{
            delete errors.password;
            errorPassword.innerHTML = ""
        }

        if(inputConfirmPassword != inputPassword){
            errors.confirmPassword = "Las contraseñas deben coincidir";
            errorConfirmPassword.innerHTML = errors.confirmPassword;
        }else{
            delete errors.confirmPassword;
            errorConfirmPassword.innerHTML = ""
        }

        
        if(Object.keys(errors).length > 0){
            e.preventDefault();
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