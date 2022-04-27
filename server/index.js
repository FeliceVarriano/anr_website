const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");
const port = process.env.PORT || 3001;
const hostname = "127.0.0.1";

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "68.178.222.76",
  port: "3306",
  user: "mike_db",
  password: "vHatGmC46Bce",
  database: "anrstreamingdb",
});

// const db = mysql.createPool({
//   host: "localhost",
//   port: "3306",
//   user: "root",
//   password: "password",
//   database: "livestreams",
// });

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

app.listen(port, hostname, () => {
  console.log(`server is running on port ${port} ${hostname}`);
});
