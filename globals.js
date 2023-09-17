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
    showCircumcircle: true,
    showBisectors: true,
    showSegments: true,
    showMidpoints: true,
    showIntersection: true,
    showSites: true,
    showLabels: true
};

palette = { 
    backgroundColor: "#157a7b",
    circumcircleColor: "#ffffff", 
    bisectorColor: "#ffffff", 
    segmentColor: "#ffffff", 
    midpointColor: "#ffffff", 
    intersectionColor: "#ffffff", 
    siteColor: "#ffffff", 
    labelColor: "#ffffff" 
}

let hiddenControls = {
    showArrowTip: false
};