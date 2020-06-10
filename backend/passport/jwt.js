const passportJWT = require("passport-jwt");
const JwtStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const UserModel = require("../models/usuario");

const config = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    algorithms: [process.env.JWT_ALGORITHM]
}
const jwtStrategy = new JwtStrategy(config, async (jwt_payload, done) => {
    console.log(jwt_payload);
    const usuario = await UserModel.findById(jwt_payload.sub);
    if(!usuario) return done(null, false);
    return done(null, usuario);
} );

module.exports = jwtStrategy;