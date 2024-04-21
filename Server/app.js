const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const dbservice = require("./dbservice.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//middlware

app.use((req, res, next) => {
  console.log("API Path", req.path);
  next();
});

//create
app.post("/insert", (req, res) => {});

//read
app.get("/getAll", (req, res) => {
  res.json({
    success: true,
  });
});

//update
app.put("/update", (req, res) => {});

//delete
app.delete("/delete", (req, res) => {});

app.listen(process.env.PORT, () =>
  console.log(`App is running on port ${process.env.PORT}`)
);
