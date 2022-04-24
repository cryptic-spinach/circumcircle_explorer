function controls_init() {
    gui = new dat.GUI();

    gui.width = 300;
    gui.add(controls, "showCircumcircle").name("Circumcircle");
    gui.add(controls, "showBisectors").name("Bisectors");
    gui.add(controls, "showSegments").name("Segments");
    gui.add(controls, "showMidpoints").name("Midpoints");
    gui.add(controls, "showIntersection").name("Intersection");
    gui.add(controls, "showSites").name("Sites");
    gui.add(controls, "showLabels").name("Labels");
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
    site_C.x = mouseX - windowWidth/2
    site_C.y = -mouseY + windowHeight/2;
}