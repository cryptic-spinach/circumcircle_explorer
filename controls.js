function controls_init() {
    gui = new dat.GUI();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
    site_C.x = mouseX - windowWidth/2
    site_C.y = -mouseY + windowHeight/2;
}