function controls_init() {
    gui = new dat.GUI();

    gui.width = 300;
    gui.add(controls, "showCircumcircle").name("Circumcircle");
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
    site_C.x = mouseX - windowWidth/2
    site_C.y = -mouseY + windowHeight/2;
}