module.exports = app => {
  var HomeController = {
    index: (req, res) => {
      // render => returns the rendered HTML of a view via the callback function
      const session = req.session;
      if (session.email){
        // res.send('Já logado')
        res.redirect('/contatos');
      } else {
        res.render('home/index'); // renden on views/home/index
      }
    },

    login: (req, res) => {
      const { name, email } = req.body;
      if(name && email) {
        // res.send('Obrigado ' + name + ':' + email)
        const session = req.session;

        session.user = {
          name,
          email,
          contatos: [],
        };
        
        // session.name = name
        // session.email = email
        // res.send('Login ok')
        
        res.redirect('/contatos');
      } else {
        res.redirect('/');
      }
    },

    logout: (req, res) => {
      req.session.destroy();
      res.redirect('/');
    },

    test: (req, res) => {
      const session = req.session;
      if(session.email) {
        res.send('OKOKOK')
      } else {
        res.render('test')
      }
    },

    logar: (req, res) => {
      const session = req.session;
      session.email = req.body.name;
      session.name = req.body.name;
      res.send('logado')
    },
  };

  return HomeController;
};