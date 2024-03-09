const express = require("express");
const path = require("path");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "styles.css"));
});

app.get("/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname, "script.js"));
});

// Define routes for each file
const fileNames = [
  "cool-background.png",
  "IMG_0071.JPG",
  "FullSizeRender.jpeg",
  "IMG_0080.JPG",
  "IMG_0249.JPG",
  "IMG_0345.JPG",
  "IMG_1175.jpeg",
  "IMG_2572.jpg",
  "IMG_2961.jpeg",
  "IMG_4900.jpeg",
  "IMG_9935.jpeg",
];

fileNames.forEach((fileName) => {
  app.get(`/${fileName}`, (req, res) => {
    res.sendFile(path.join(__dirname, fileName));
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
