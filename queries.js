const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

const getCats = () => {
  return new Promise((resolve, reject) => {
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
};

const getDogs = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT Name, Age FROM animals_to_adopt WHERE Type='dog'",
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      }
    );
  });
};

const createPartner = (request, response) => {
  const { name, lname, mail } = request.body;

  pool.query(
    "INSERT INTO partners (name, last_name, mail) VALUES ($1, $2, $3)",
    [name, lname, mail],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.render("Wellcome.html");
    }
  );
};

module.exports = { getCats, getDogs, createPartner };
