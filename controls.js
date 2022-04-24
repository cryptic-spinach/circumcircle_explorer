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

function mousePressed() {
    if (dist(site_C.x, site_C.y, trueMouseX, trueMouseY) < site_C.r) {
        site_C.selected = true;
    }
}

function mouseDragged() {
    if (site_C.selected) {
        site_C.x = trueMouseX;
        site_C.y = trueMouseY;
    }
}

function mouseReleased() {
    site_C.selected = false;
}