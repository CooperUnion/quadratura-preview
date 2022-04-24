  const GLITCH = true;
import fs from "fs";

const screen = (p, canvas) => {
  if (GLITCH) {
    p.saveCanvas(canvas, "public/images/mySketch" + Date.now(), "png").then((filename) => {
      console.log(`saved the canvas as ${filename}`);
    });
  } else {
    console.log(p.canvas.toDataURL());
  }
};

export default screen;
