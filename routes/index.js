var express = require('express');
var router = express.Router();

router.get('/produto', async (req, res) => {
 try {
 const docs = await global.db.findAll();
 res.send(docs);
 } catch (err) {
 res.send({resultado:"Erro ao Listar", mensagem: err});
 }
})
router.get('/produto/:id', async (req, res) => {
 try {
 const doc = await global.db.findOne(req.params.id);
 res.send(doc);
 } catch (err) {
 res.send({resultado:"Erro ao Consultar", mensagem: err});
 }
})
router.post('/produto', async (req, res) => {
 const codigo = req.body.codigo;
 const nome = req.body.nome;
 const quantidade = parseInt(req.body.quantidade);
 try {
 const doc = await global.db.insert({codigo, nome, quantidade});
 res.send(doc);
 } catch (err) {
 res.send({resultado:"Erro ao Inserir", mensagem: err});
 }
})
router.delete('/produto/:id', async (req, res) => {
 try {
 await global.db.deleteOne(req.params.id);
 res.send({resultado:"Removido"});
 } catch (err) {
 res.send({resultado:"Erro ao Remover", mensagem: err});
 }
})

module.exports = router;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
