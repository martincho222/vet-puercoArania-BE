const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");

const UserController = {
  UserList: async (req, res, next) => {
    const users = await UserModel.find();
    return res.json(users);
  },

  createUser: async (req, res, next) => {
    const { username, email, password } = req.body;
    const user = await UserModel.findOne({ $or: [{ username }, { email }] });
    if (user) {
      res.status(404).send({
        error: `El usuario ${username} o el email ${email} ya se encuentra en uso`,
      });
      return;
    }
    const newUser = new UserModel({
      username,
      email,
      role: "user",
      password: bcrypt.hashSync(password, parseInt(process.env.BCRYPT_ROUNDS)),
    });
    const response = await newUser.save();
    res.json(response);
  },

  autenticarUsuario: async (req, res, next) => {
    //passport local
    passport.authenticate("local", { sesion: false }, (error, user) => {
      //callback una vez autenticado el usuario de manera local
      // res.status(200).json({error, user})
      if (error) {
        return res.status(400).json({ error });
      }
      if (!user) {
        return res
          .status(400)
          .json({ message: "user not found or password incorrect" });
      }

      const payload = {
        sub: user._id,
        role: user.role,
        name: user.name,
        exp: Date.now() + parseInt(process.env.JWT_LIFETIME),
      };
      // crear un token para el usuario [se alamcena en el frontend en localStorage]
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        algorithm: process.env.JWT_ALGORITHM,
      });
      res.json({ token });
    })(req, res, next);
  },
};

module.exports = UserController;
