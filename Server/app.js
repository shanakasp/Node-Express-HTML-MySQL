const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//middlware

app.use((req, res, next) => {
  console.log("API Path", req.path);
  next();
});

//create
app.post("/insert", (req, res) => {});

//read
app.get("/get", (req, res) => {
  console.log("test");
});

//update
app.put("/update", (req, res) => {});

//delete
app.delete("/delete", (req, res) => {});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
