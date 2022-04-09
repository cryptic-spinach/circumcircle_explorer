function controls_init() {
    gui = new dat.GUI();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
    site_A.x = mouseX - windowWidth/2
    site_A.y = -mouseY + windowHeight/2;
}