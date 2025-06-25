const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const profileRoutes = require("./routes/profileRoutes");
const { connectiondb } = require("./config/db");

dotenv.config();
require("./auth/google");

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
app.get("/auth/google/callback", passport.authenticate("google", { successRedirect: "/profile", failureRedirect: "/login" }));
app.get("/profile", (req, res) => (req.isAuthenticated() ? res.send(req.user) : res.status(401).send("Not Authenticated")));
app.get("/logout", (req, res) => req.logout(() => res.redirect("/")));

app.use("/api/profile", profileRoutes);

const PORT = process.env.PORT || 4500;
app.listen(PORT, async () => {
  try {
    await connectiondb;
    console.log("Connected to MongoDB");
    console.log(`Server running at http://localhost:${PORT}`);
  } catch (error) {
    console.error("DB connection error:", error.message);
  }
});
