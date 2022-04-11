//Conexão com o banco de dados na porta padrão 27017
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost:27017/db_finance',{useMongoClient:true});

mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório!"