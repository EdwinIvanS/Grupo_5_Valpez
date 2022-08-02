window.addEventListener("load", function () {
    let btn = document.querySelector("#btn");
    let errors = {}
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    let errorTitle = document.querySelector("span.errorTitle");
    let errorPrice = document.querySelector("span.errorPrice");
    let errorSmallDescription = document.querySelector("span.errorSmallDescription");
    let errorImages = document.querySelector("span.errorImages");
    let errorUnits = document.querySelector("span.errorUnits");
    let errorColors = document.querySelector("span.errorColors");
    let errorSize = document.querySelector("span.errorSize");


    
    btn.addEventListener("click", function (e) {
        let inputTitle = document.querySelector('#title').value;
        let inputPrice = document.querySelector('#price').value;
        let inputSmallDescription = document.querySelector('#smallDescription').value;
        let inputImages = document.querySelector('#images').value;
        let inputUnits = document.querySelector('#units').value;
        let inputColors = document.querySelector('#colors').value;
        let inputSize = document.querySelector('#size').value;
        
        if(inputTitle == "") {
            errors.title = "Debes ingresar el título del producto";
            errorTitle.innerHTML = errors.title;
        }else if (inputTitle.length < 5){
            errors.title = "El título debe contener al menos 5 caracteres";
            errorTitle.innerHTML = errors.title;
        }else {
            delete errors.title;
            errorTitle.innerHTML = ""
        }

        if(inputPrice == ""){
            errors.price = "Debes ingresar un valor";
            errorPrice.innerHTML = errors.price;
        }else if (inputPrice.isNumeric){
            errors.price = "El precio debe ser un número";
            errorPrice.innerHTML += errors.price;
        }else {
            delete errors.price;
            errorPrice.innerHTML = ""
        }

        if(inputSmallDescription == ""){
            errors.smallDescription = "Debes ingresar una breve descripción del producto";
            errorSmallDescription.innerHTML = errors.smallDescription;
        }else if(inputSmallDescription.length < 20){
            errors.smallDescription = "La Descripción debe contener al menos 20 caracteres";
            errorSmallDescription.innerHTML = errors.smallDescription;
        }else {
            delete errors.smallDescription;
            errorSmallDescription.innerHTML = ""
        }

        if(inputImages && !allowedExtensions.exec(inputImages)){
            errors.images = 'Las extensiones del archivo permitidas son: ".jpg", ".png", ".gif", ".jpeg"';
            errorImages.innerHTML = errors.images;
        }else{
            delete errors.images;
            errorImages.innerHTML = ""
        }

        if(inputUnits == ""){
            errors.units = "Debes ingresar una cantidad";
            errorUnits.innerHTML = errors.units;
        }else if (inputUnits.isNumeric){
            errors.units = "Debes ingresar un valor numerico";
            errorUnits.innerHTML += errors.units;
        }else {
            delete errors.units;
            errorUnits.innerHTML = ""
        }

        if(inputColors == ""){
            errors.colors = "Debes ingresar uno o varios colores";
            errorColors.innerHTML = errors.colors;
        }else {
            delete errors.colors;
            errorColors.innerHTML = ""
        }

        if(inputSize == ""){
            errors.size = "Debes ingresar uno o varios tamaños";
            errorSize.innerHTML = errors.size;
        }else {
            delete errors.size;
            errorSize.innerHTML = ""
        }

        
        if(Object.keys(errors).length > 0){
            e.preventDefault();
        }   

    })
}) 