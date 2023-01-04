// Imports
const express = require("express");
const app = express();
const port = 3000;

// Static Files
app.use(express.static("public"));

app.use("/html", express.static(__dirname + "public/html"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});
// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/html/register/register.html");
});
