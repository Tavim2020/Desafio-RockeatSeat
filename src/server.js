var express = require('express');
var bodyParser = require('body-parser');
const { Route } = require('express');
var data = require('./data/data');


var server = express();


// utilizações do servidor
server.use(express.static('assets'));

// Json
server.use(express.json());

// configurando body-parser
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());


// rotas da nossa aplicação
server.get('/', (req,res) =>{
    res.sendFile(__dirname + '/html/index.html');
})

server.get('/sobre', (req, res) =>{
    res.sendFile(__dirname + '/html/sobre.html');
})

server.get('/receitas', (req, res) =>{
    res.sendFile(__dirname + '/html/receitas.html');
})

server.get('/principaisInstrucoes', (req, res) =>{
    res.sendFile(__dirname + '/html/instrucoesDaReceitaPrincipal.html');
})

server.get('/recipes/:id', (req, res) =>{
    res.render(__dirname + '/html/instrucoesDaReceita.html');
    console.log(req.params.id)
})

server.listen(3000);