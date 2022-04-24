import fs from "fs";
import path from "path";

const GLITCH = true;

let lastFile = "";
const fsImageDir = "./public/images";

const screen = (p, canvas) => {
  if (GLITCH) {
    console.log("trying to save");
    const fileName = "mySketch" + Date.now();
    if (lastFile !== "" && lastFile) {
      let fileToDelete = fsImageDir + lastFile + ".png";
      fs.unlink(path.join(fsImageDir, lastFile + ".png"), (err) => {
        if (err) throw err;
        else {
          console.log("Deleted", fileToDelete);
        }
      });
    }
    p.saveCanvas(canvas, "public/images/" + fileName, "png").then(
      (filename) => {
        console.log(`saved the canvas as ${filename}`);
        lastFile = fileName;
      }
    );
  } else {
    console.log(p.canvas.toDataURL());
  }
};

export default screen;
