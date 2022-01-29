const express = require('express');
const res = require('express/lib/response');
const app = express();
const hbs = require('hbs');
//Data
const {plato} = require('./hbs/helpers');
const {categoria} = require('./hbs/helpers2');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

//Motor de vistas HBS de express
app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.get("/",(req,res)=>{
    res.render('home',{plato:plato,categoria:categoria});
});

app.listen(port,()=>console.log(`escuchando en el puerto ${port}`));