const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pets_friends",
  password: "indepetake",
  port: 5432,
});

const getCats = () => {
  const showCats = new Promise((resolve, reject) => {
    pool.query(
      "SELECT Name, Age FROM animals_to_adopt WHERE Type='cat'",
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      }
    );
  });
  return showCats;
};

module.exports = getCats;
