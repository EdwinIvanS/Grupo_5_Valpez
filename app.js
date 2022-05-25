// ************ Require's ************
const createError = require('http-errors');
const express = require('express');
const methodOverride =  require('method-override'); 
const ejsLint = require('ejs-lint');
const path = require("path");

const app = express();

app.use(express.json());

app.use(methodOverride("_method"));

const publicPath = path.resolve(__dirname, "./public");
app.use (express.static(publicPath));

// Router
const mainRouter = require('./routers/main');
const productsRouter = require('./routers/products');
const usersRouter = require('./routers/users');

//Usar ejs templates
app.set('view engine', 'ejs');

// Ruta Principal
app.use("/", mainRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

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