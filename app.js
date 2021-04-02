const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();
const app = express();
const port = 3300;
const router = express.Router();
const nunjucks = require("nunjucks");
const getCatsList = require("./controllers/CatsController");
const getDogsList = require("./controllers/DogsController");
const { createPartner } = require("./queries");

nunjucks.configure("view", {
  autoescape: true,
  express: app,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

router.post("/become_partner", createPartner);

router.get("/management", (req, res) => {
  res.render("Management.html");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
