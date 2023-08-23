const express = require('express');

const app = express();
const authRoutes = require("../src/routes/auth/authUsers");

// settings
app.set("port", process.env.PORT || 8000);

// middlewares
app.use(express.json({extended: false}));

// routes
app.use(authRoutes);


app.listen(app.get('port'), () => {
    console.log('server on port : ', app.get('port'));
});