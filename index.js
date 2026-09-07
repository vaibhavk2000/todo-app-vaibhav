// index.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// In-memory task list
let tasks = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home route - render tasks
app.get("/", (req, res) => {
  res.render("index", { tasks });
});

// Add new task
app.post("/add", (req, res) => {
  const task = req.body.task;
  if (task) tasks.push(task);
  res.redirect("/");
});

// Delete task
app.post("/delete", (req, res) => {
  const index = req.body.index;
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
  }
  res.redirect("/");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
