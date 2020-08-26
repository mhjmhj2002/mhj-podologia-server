module.exports = function (app) {

    app.get('mensagens', function (req, res) {
        console.log('Recebida requisicao de mensagens.')
        var connection = req.connection;
        var mensagemDao = new app.persistencia.MensagemDao(connection);

        mensagemDao.getAll(function(erro, resultado){
            if(erro){
              console.log('erro ao consultar no banco: ' + erro);
              res.status(500).send(erro);
              return;
            }
            console.log('mensagens encontradas: ' + JSON.stringify(resultado));
            res.json(resultado);
            return;
          });
    });

    app.post('mensagem', function(req, res){
        console.log('Recebida requisicao de inclusao de mensagem.');
        console.log('body: ' + JSON.stringify(req.body));
        
        var email = req.body.email;
        var nome = req.body.nome;
        var mensagem = req.body.mensagem;

        var connection = req.connection;
        var mensagemDao = new app.persistencia.MensagemDao(connection);

        mensagemDao.incluirMensagem(email, nome, mensagem, function(erro, resultado) {
            if(erro){
              console.log('erro ao consultar no banco: ' + erro);
              res.status(500).send(erro);
              return;
            }
            console.log('mensagens encontradas: ' + JSON.stringify(resultado));
            res.json(resultado);
            return;
        });
    });

    

}
