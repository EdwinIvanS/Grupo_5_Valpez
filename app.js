// ************ Require's ************
const express = require('express');
const methodOverride =  require('method-override'); 
const path = require("path");
const session = require('express-session');
const cookieParser = require('cookie-parser');

const userLoguinMiddleware = require('./middlewares/userLoguinMiddleware');

const app = express();

app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: false}));

const publicPath = path.resolve(__dirname, "./public");
app.use (express.static(publicPath));

// Router
const mainRouter = require('./routers/main');
const productsRouter = require('./routers/products');
const usersRouter = require('./routers/users');


//Usar ejs templates
app.set('view engine', 'ejs');


app.use(session({
    secret:'valor',
    resave: false,
    saveUninitialized : false
}));

app.use(cookieParser());

app.use(userLoguinMiddleware);

// Ruta Principal
app.use("/", mainRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

// Llamado al servidor
app.listen(3000, () => {
    console.log("Server running 3000")
});



