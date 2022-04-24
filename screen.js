const GLITCH = true;

const screen = (p) => {
  
  if (GLITCH) {
    console.log(p);
  } else {
    console.log(p.canvas.toDataURL());
  }
  
  
}

export default screen;