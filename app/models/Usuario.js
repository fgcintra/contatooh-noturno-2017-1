var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

module.exports = function() {
   // Definição do schema para os usuários salvos no mongo - André Morais Martins
   var schema = mongoose.Schema({
      login: {
         type: String,
         required: true,
         index: {
            unique: true
         }
      },
      nome: {
         type: String,
         required: true
      },
      inclusao: {
         type: Date,
         default: Date.now
      },
      ultimoLogin: {
         type: Date,
         default: Date.now
      }
   });

   schema.plugin(findOrCreate);
   return mongoose.model('Usuario', schema);

}; 