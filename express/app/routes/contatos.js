module.exports = function(app) {
  const auth = require('../middleware/auth');
  const contatos = app.controllers.contatos;
  app.get('/contatos', auth, contatos.index);
  app.get('/contato/:id', auth, contatos.show);
  app.post('/contato', auth, contatos.create);
  app.get('/contato/:id/editar', auth, contatos.edit);
  app.put('/contato/:id', auth, contatos.update);
  app.delete('/contato/:id', auth, contatos.destroy);
  };