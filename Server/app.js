const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const DbService = require("./dbservice.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware
app.use((req, res, next) => {
  console.log("API Path", req.path);
  next();
});

const db = DbService.getInstance();

// Create
app.post("/insert", async (req, res) => {
  try {
    const result = await db.insertData(req.body);
    res.json(result);
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read
app.get("/getAll", async (req, res) => {
  try {
    const result = await db.getAllData();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
app.put("/update", async (req, res) => {
  try {
    const result = await db.updateData(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete
app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.deleteData(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
