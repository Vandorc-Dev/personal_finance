//Conexão com o banco de dados na porta padrão 27017
const mongoose =require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/db_finance');