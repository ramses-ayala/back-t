const { Router } = require('express');
const routes = Router();

// import routes
const authRoutes = require("./routes/auth/auth.routes");
const userRoutes = require("./routes/users/users.routes");

routes.use("/auth", authRoutes);
routes.use("/users", userRoutes);

module.exports = routes;