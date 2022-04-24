import fs from "fs";
import path from "path";

const GLITCH = process.env.GLITCH || true;

let lastFile = "";
const fsImageDir = "./public/images";


class Screen {
  constructor(location = 'public/images/'){
    this.counter = 0
    this.location = location
    this.p = p
    this.canvas = canvas
    this.render = GLITCH ? this.display : this.save
  }
  
  display (p, ) {
    console.log(this.p.canvas.toDataURL())
  }
  
  save() {
    const fileName = "mySketch" + Date.now();
    this.p.saveCanvas(this.canvas, "public/images/" + fileName, "png").then(
      (filename) => {
        console.log(`saved the canvas as ${filename}`)
        lastFile = fileName;
      }
    )
  }
}

export default Screen;
