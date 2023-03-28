const { passport } = require("passport");

// Nos traemos las estrategias que vamos a usar
const LocalStrategy = require("./strategies/localStrategy");
// Se hace uso de la estrategia traida
passport.use(LocalStrategy);
