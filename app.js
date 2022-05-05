const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use (express.static(publicPath));

app.listen(3000, () => {
    console.log("Server running 3000")
});

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