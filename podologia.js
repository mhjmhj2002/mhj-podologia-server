var app = require('./config/custom-express')();

app.listen(21526, function(){
  console.log('Servidor rodando na porta 21526.');
});
