const passport = require("passport");

const authenticateUser = (req, res, next) => {
  //verficiar que el usuario este autenticado
  passport.authenticate("jwt", { session: false }, (err, info, user) => {
    if (err) next(err);
    if (info) next(res.status(400).json({ error: info.message }));
    if (!user){
      next(res.status(400).json({ error: "Prohibido: usuario no encontrado" }))
    }else{
      return req.user = user;
    }next();
  });
};

module.exports = authenticateUser;
