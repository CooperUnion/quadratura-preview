import p5 from 'node-p5'
import Screen from './screen.js';

const screen = new Screen()
const { render } = screen

let width = 320
let height = 240
let canvas
let fps = 1

function sketch(p) {
    p.setup = () => {
        canvas = p.createCanvas(width, height);

        p.colorMode('HSB')
        p.rectMode('CENTER')
        p.frameRate(fps)
        p.stroke(0)
        p.noFill()
    }
    p.draw = () => {
        p.background("yellow");
        
        p.translate(width/2, height/2);
        p.fill(p.random(0,360), 50,50);
        p.ellipse(0,0, 10,10);

        render(p, canvas);
    }
}
let p5Instance = p5.createSketch(sketch);

