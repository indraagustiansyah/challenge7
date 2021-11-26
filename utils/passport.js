// import pasport
const passport = require("passport")

// import local strategy
const LocalStrategy = require("passport-local").Strategy

// import user model
const { User } = require("../models")

// import bcrypt => ngecompare password
const bcrypt = require('bcrypt')

// controller di passport
const authenticate = async(email, password, done) => {
    try {
        const user = await User.findOne({
            where: {email}
        })
       // console.log(user)
        if (!user) {
            console.log('Incorrect username.')
            return done(null, false, { message: 'Incorrect username.' })
        }

        const isMatchPassword = await bcrypt.compare(password, user.password)
        if (!isMatchPassword) {
            console.log( 'Incorrect password.')
            return done(null, false, { message: 'Incorrect password.' });
        }
        console.log( 'sukkses')
        return done(null, user)
    } catch (error) {
        console.log(error)
        return done(null, true, {message: error.message})
    }
}

passport.use(new LocalStrategy({usernameField: "email", passwordField: "password" }, authenticate))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await User.findByPk(id)

    done(null, user.dataValues)
})

module.exports = passport