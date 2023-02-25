const app = require('./app');
const mongoose = require('mongoose');   

mongoose.set('strictQuery',false);

require('dotenv').config({path:'variables.env'});

//Conexão ao banco de dados
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});  //String de conexão como parametro
mongoose.Promise = global.Promise;       //Liberando funcionalidade para o mongoose
mongoose.connection.on('error', (error)=>{  //Log de erro
    console.error("ERROR: "+error.message);
})

app.set('port',process.env.PORT || 7777);
const server = app.listen(app.get('port'),()=> {
    console.log("Servidor Rodando na porta: "+server.address().port);
});
