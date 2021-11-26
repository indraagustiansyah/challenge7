// import express

const express = require ("express")
const app = express()
const path = require('path')
// import dotenv
require('dotenv').config()
const PORT = process.env.PORT

const sequelize = require("./models/sequelize");
// const {SESSION_SECRET} = process.env
const session = require("express-session");
const flash = require("express-flash")
const passport = require("passport")
// app.use(flash());
// gunakan middleware express.json dan express.urlencoded
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(session({
//   secret: SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }))

sequelize
  .authenticate()
  .then(() => {
    console.log("connect");
  })
  .catch((error) => {
    console.log("error");
  });

  // import user router
const user = require('./routers/users.router')
const dashboard = require('./routers/dashboards.router')
const player = require('./routers/players.router')

app.use(user) 
app.use(dashboard) 
app.use(player) 
// configure path 
app.use('/publics', express.static('public'))

// configure template engine using ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// error handling
app.use((err, req, res, next) => {
    console.log(err);
    const {message, code = 500, error ="internal server error"} = err;

    return res.status(code).json({
        message,
        code,
        error
    });
})

app.listen(PORT, () => console.log(`Express server running on http://localhost:${PORT}`))