module.exports = function(app) {
  var ContatoController = {
    index: function(req, res) {
      // user logado
      /*var user = {
        name: req.session.name,
        email: req.session.email,
      };*/

      const { user, user: { contatos } } = req.session;

      var params = { user, contatos };
      res.render('contatos/index', params);
      
    },

    show: (req, res) => {
      const { id } = req.params;
      const { user } = req.session
      const params = {
        contato: user.contatos[id],
        id,
      };
      res.render('contatos/show', params)
    },

    create: (req, res) => {
      const { name, email } = req.body;
      const { user } = req.session;
      user.contatos.push({
        name,
        email,
      });
      res.redirect('/contatos');
    },

    edit: (req, res) => {
      const { id } = req.params;
      const { user: { contatos } } = req.session;
      const params = {
        contato: contatos[id],
        id
      }
      res.render('contatos/edit', params);
    },

    update: (req, res) => {
      const { name, email } = req.body;
      const { user: { contatos }} = req.session;
      contatos[req.params.id] = {
        name,
        email,
      }
      res.redirect('/contatos')
    },

    destroy: (req, res) => {
      const { user: { contatos } } = req.session;
      const { id } = req.params;
      contatos.splice(id, 1);
      
      res.redirect('/contatos')
    },

  }
  return ContatoController;
};