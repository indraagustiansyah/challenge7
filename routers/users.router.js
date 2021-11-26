const router = require('express').Router()

// const {viewRegister, register, login, viewLogin, whoiami} = require('../controllers/users.controller')
const { register, login, viewLogin, whoiami} = require('../controllers/users.controller')
const passport = require('../utils/passport.js')
// import local strategy
const LocalStrategy = require("passport-local").Strategy

const { validate } = require('../middlewares/validation.midleware')
const { registerSchema } = require('../schemas/register.schema')
const { verify } = require('../middlewares/verify.middleware')

router.post('/register', validate(registerSchema), register)

// router.post('/login/web', passport.authenticate('local',{
//     successRedirect: '/home',
//     failureRedirect: '/dashboard',
//     // failureFlash: true
// }))

router.post('/login', login)
router.get('/login', viewLogin)

// router.get('/whoiami', verify, whoiami)

module.exports = router