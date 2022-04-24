import fs from "fs";
import path from "path";

const GLITCH = process.env.GLITCH || true;

let lastFile = "";
const fsImageDir = "./public/images";


class Screen {
  constructor(location = 'public/images/'){
    this.counter = 0
    this.location = location
    this.render = GLITCH ? this.display : this.save
  }
  
  display (p = this.p, canvas=this.canvas) {
    console.log(p.canvas.toDataURL())
  }
  
  save(p = this.p, canvas=this.canvas) {
    const fileName = "mySketch" + Date.now();
    p.saveCanvas(this.canvas, "public/images/" + fileName, "png").then(
      (filename) => {
        console.log(`saved the canvas as ${filename}`)
        lastFile = fileName;
      }
    )
  }
}

const screen = new Screen()
export default Screen

const { render } = screen
export { render }




