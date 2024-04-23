// dbservice.js
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

let instance = null;

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("db " + connection.state);
});

class DbService {
  static getInstance() {
    return instance ? instance : new DbService();
  }

  getAllData() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM name";
      connection.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  insertData(data) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO name SET ?";
      connection.query(query, data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  updateData(data) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE name SET ? WHERE id = ?";
      connection.query(query, [data, data.id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  deleteData(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM name WHERE id = ?";
      connection.query(query, id, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = DbService;
