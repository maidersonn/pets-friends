const { getDogs } = require("../queries");

const getDogsList = (req, res) => {
  getDogs()
    .then((dogs) => {
      res.render("Dogs.html", { dogs: dogs });
    })
    .catch((error) => {
      res.render("Dogs.html", { error: error });
    });
};

module.exports = getDogsList;
