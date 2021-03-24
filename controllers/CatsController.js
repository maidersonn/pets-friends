const getCats = require("../queries");

const getCatsList = (req, res) => {
  getCats()
    .then((cats) => {
      res.render("Cats.html", { cats: cats });
    })
    .catch((error) => {
      res.render("Cats.html", { error: error });
    });
};

module.exports = getCatsList;
