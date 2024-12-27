const path = require("node:path");
const { Pool } = require("pg");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

require("dotenv").config();

const dbHost = process.env.HOST;
const dbUser = process.env.DBUSER;
const dbPassword = process.env.DBPASSWORD;
const database = process.env.DBDATABASE;
const port = process.env.DBPORT;

const pool = new Pool({
  //
  host: dbHost,
  user: dbUser,
  database: database,
  password: dbPassword,
  port: port,
});

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middleware
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

// currentUser variable, will help
//so i dont hav eto mannually pass it into all controlelrs

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.get("/", (req, res) => res.render("index", { user: req.user }));
app.get("/sign-up", (req, res) => res.render("sign-up-form"));
app.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

// //this works fine but i need to encrypt it
// app.post("/sign-up", async (req, res, next) => {
//   try {
//     await pool.query("INSERT INTO users (username, password) VALUES ($1,$2)", [
//       req.body.username,
//       req.body.password,
//     ]);
//     res.redirect("/");
//   } catch (err) {
//     return next(err);
//   }
// });

app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

passport.use(
  new localStrategy(async (username, password, done) => {
    try {
      const { rows } = await pool.query(
        "SELECT * FROM users WHERE username = $1",
        [username]
      );
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: "incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    const user = rows[0];

    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.listen(3000, () => console.log("app listening on port 3000!"));
