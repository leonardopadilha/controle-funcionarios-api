const handle_404Error = function(re, res) {
    res.status(404);
    res.send(['Não encontrado'])
}

module.exports = handle_404Error;