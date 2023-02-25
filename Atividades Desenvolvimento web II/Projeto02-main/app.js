//fazendo a importação do express 
const express = require("express");

//Rotas (quando o servidor for acessado, pra onde ele vai?)
const router = express.Router();
router.get('/',(req,res) => { //Primeiro rota // função anônima // dois parametros
   res.send("Bora Fazer...");
});

//configurações básicas do aplicativos 
const app = express();
app.use('/',router);  //Foi passado 1 rota pois criamos apenas 1

module.exports = app; //exportamos o app, pois vamos importa-lo no servidor 