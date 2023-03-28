const passport = require("passport");
const JwtStrategy = require("./auth/estrategies/jwtStrategi");

passport.use(JwtStrategy);
