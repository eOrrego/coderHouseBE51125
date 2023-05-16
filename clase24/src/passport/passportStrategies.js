import passport from 'passport'
import { studentsModel } from '../db/models/students.model.js'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Strategy as LocalStrategy } from 'passport-local'
import { hashData } from '../utils.js'

passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: 'email',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const { first_name, last_name, dni } = req.body
        if (!first_name || !last_name || !dni || !email || !password) {
          return done(null, false)
        }

        const userDB = await studentsModel.findOne({ email })
        if (userDB) {
          return done(null, false)
        }

        const hashPassword = await hashData(password)
        const newObj = { ...req.body, password: hashPassword }
        const newUser = await studentsModel.create(newObj)
        done(null, newUser)
      } catch (error) {
        done(error)
      }
    }
  )
)

passport.use(
  'googleSignup',
  new GoogleStrategy({
    clientID: '912264884771-kpq3gh3u6q4816q1r5ue8bajm75r59pf.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:8080/students/googleCallback',
  }, async(accessToken, refreshToken, profile, done)=>{
    done(null,false)
  })
)

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await studentsModel.findById(id)
    done(null, user)
  } catch (error) {
    done(error)
  }
})
