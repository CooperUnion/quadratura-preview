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


app.get("/gallery", (req, res) => {
  let responseHTML = "<h1> your images </h1>";
  fs.readdir("./public/images", (error, files) => {
    var imgFiles = [];
    let filesReverse  = files.reverse();
    filesReverse.forEach((file, index) => {
      if (index > 10) {
        //TODO: deleteFile(file);
      }
      responseHTML += `<img src='/images/${file}' />`;
    });
    // res.send(files[files.length-1]);
    res.set("Content-Type", "text/html");
    res.send(Buffer.from(responseHTML));
  });
});



app.get("/latest-image", (req, res) => {
  fs.readdir("./public/images", (error, files) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ image: "/images/" + files[files.length - 1] }));
    res.send();
  });
});

// Server setup
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
});
