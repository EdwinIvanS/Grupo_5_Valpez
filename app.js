// Express
const express = require("express");
const app = express();

// Router
const rutaMain = require('./routers/main');

// Path
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");
app.use (express.static(publicPath));

//Usar ejs templates
app.set('view engine', 'ejs');

// Ruta Principal
app.use("/", rutaMain);


// Llamado al servidor
app.listen(3000, () => {
    console.log("Server running 3000")
});





/*
BACKUP
***********CODIGO ORIGINAL****************

app.get("/home", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/Main/index.html"))
});

app.get("/productDetail", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/Productos/productDetail.html"))
});

app.get("/productCart", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/Productos/productCart.html"))
});

app.get("/productCreate", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/Productos/productCreate.html"))
});

app.get("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/User/login.html"))
});

app.get("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/User/register.html"))
});

*/