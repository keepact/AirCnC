const express = require('express');
const mongoose = require ('mongoose')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://OminiStack:OminiStack@oministack-indr6.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

// res.query = Acessar query params (para filtros)
// res.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requisição (para criação e edição)

app.use(express.json());
app.use(routes);

app.listen(3333);