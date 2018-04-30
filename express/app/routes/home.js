module.exports = app => {
  let home = app.controllers.home;
  app.get('/', home.index);
  app.post('/entrar', home.login);
  app.get('/sair', home.logout);
  app.get('/test', home.test);
  app.post('/logar', home.logar);
  app.get('/logout', home.logout)
};