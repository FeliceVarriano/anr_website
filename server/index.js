const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");
const { restart } = require("nodemon");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_USER_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

const db = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "password",
  database: "livestreams",
});

app.get("/api/get", (req, res) => {
  const sqlSelect =
    "SELECT livestreamUrl FROM livestreams where livestreamId = 1";

  try {
    db.query(sqlSelect, (err, result) => {
      console.log(result);
      console.log(err);
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
  //res.send("Hola");
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
