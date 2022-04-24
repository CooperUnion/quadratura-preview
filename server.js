// Requiring module
import express from "express";
import fs from "fs";

// Creating express object
const app = express();

// Defining port number
const PORT = 3000;

// Function to serve all static files
// inside public directory.
app.use(express.static("public"));
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  let responseHTML = "<h1> hello </h1>";
  fs.readdir("./public/images", (error, files) => {
    var imgFiles = [];
    files.forEach((file) => {
      responseHTML += `<img src='/images/${file}' />`
    });
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(responseHTML));

  });
  
  
});

// Server setup
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
});
