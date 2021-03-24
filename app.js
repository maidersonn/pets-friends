const { response } = require("express");
const express = require("express");
const app = express();
const port = 3300;
const router = express.Router();
const nunjucks = require("nunjucks");
const getCatsList = require("./controllers/CatsController");
const getDogsList = require("./controllers/DogsController");

nunjucks.configure("view", {
  autoescape: true,
  express: app,
});

app.use("/", router);

router.get("/", (req, res) => {
  res.render("HomePage.html");
});

router.get("/cats", getCatsList);

router.get("/dogs", getDogsList);

router.get("/adoptions", (req, res) => {
  res.render("Adoptions.html");
});

router.get("/login", (req, res) => {
  res.render("Login.html");
});

router.get("/become_partner", (req, res) => {
  res.render("Partner.html");
});

router.get("/management", (req, res) => {
  res.render("Management.html");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
