let edgeLength;
let site_A;
let site_B;
let site_C;
let AB;
let BC;
let AC;
let ABC;
let BCA;
let CAB;
let trueMouseX;
let trueMouseY;

let controls = {
    showCircumcircle: false,
    showBisectors: true,
    showSegments: false,
    showMidpoints: false,
    showIntersection: false,
    showSites: true,
    showLabels: true
};

palette = { 
    backgroundColor: "#1e1e55",
    circumcircleColor: "#ffffff", 
    bisectorColor: "#ff9271", 
    segmentColor: "#20c5c5", 
    midpointColor: "#1beb95", 
    intersectionColor: "#fffe66", 
    siteColor: "#ffffff", 
    labelColor: "#1fced9" 
}

let hiddenControls = {
    showArrowTip: false
};