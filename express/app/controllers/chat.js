module.exports = app => {
  const ChatController = {
    index: (req, res) => {
      const { email } = req.params;
      const { user } = req.session;
      const params = {
        email,
        user,
      };
      res.render('chat/index', params);
    },
  };
  return ChatController;
}