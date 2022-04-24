import fs from "fs";
import path from "path";

//true means they're console.logged
//false means the images are saved
const GLITCH = process.env.GLITCH || false;

let lastFile = "";
const fsImageDir = "./public/images";


class Screen {
  constructor(location = 'public/images/'){
    this.counter = 0
    this.limit = 10
    this.location = location
    this.render = GLITCH ? this.display : this.save
  }

  display (p = this.p, canvas=this.canvas) {
    console.log(p.canvas.toDataURL())
  }

  save(p = this.p, canvas=this.canvas) {
    this.counter++
    const fileName = `mySketch-${this.counter % this.limit}.png`;
    p.saveCanvas(canvas, "public/images/" + fileName, "png").then(
      (filename) => {
        console.log(`saved the canvas as ${filename}`)
        lastFile = fileName;
      }
    )
  }
}

const screen = new Screen()
export default Screen





