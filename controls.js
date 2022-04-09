function controls_init() {
    gui = new dat.GUI();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
    resizeCanvas(windowWidth, windowHeight);
}