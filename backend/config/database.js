//Conexão com o banco de dados na porta padrão 27017
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost:27017/db_finance',{useMongoClient:true});

mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório!"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minímo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite maxímo de '{MAX}'."
mongoose.Error.messages.Number.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."