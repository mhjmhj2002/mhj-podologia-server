var app = require('./config/custom-express')();

app.listen(21137, function(){
  console.log('Servidor rodando na porta 21137.');
});
