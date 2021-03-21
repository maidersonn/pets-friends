const express = require("express");
const app = express();
const port = 3300;
const router = express.Router();
const nunjucks = require("nunjucks");

nunjucks.configure("view", {
  autoescape: true,
  express: app,
});

app.use("/", router);

router.get("/", (req, res) => {
  res.render("HomePage.html");
});
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
