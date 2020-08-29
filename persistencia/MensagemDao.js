function MensagemDao(connection) {
    this._connection = connection;
}

MensagemDao.prototype.getAll = function (callback) {
    this._connection.query("select * from mensagem",callback);
}

MensagemDao.prototype.incluirMensagem = function (email, nome, mensagem, callback) {
    var query = "insert into mensagem (email, nome, mensagem) values ('" + email + "', '" + nome + "', '" + mensagem + "')";
    console.log("query: " + query);
    this._connection.query(query,callback);
}

module.exports = function(){
    return MensagemDao;
};