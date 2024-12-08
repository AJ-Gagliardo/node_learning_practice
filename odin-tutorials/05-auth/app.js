const path = require("node:path");
const { Pool } = require("pg");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

require("dotenv").config();

const dbHost = process.env.HOST;
const dbUser = process.env.DBUSER;
const dbPassowrd = process.env.DBPASSWORD;
const database = process.env.DBDATABASE;
const port = process.env.DBPORT;

const pool = new Pool({
  //
  host,
  user,
  database,
  password,
  port,
});

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.render("index"));

app.listen(3000, () => console.log("app listening on port 3000!"));
