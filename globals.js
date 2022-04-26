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
    showBisectors: false,
    showSegments: true,
    showMidpoints: false,
    showIntersection: false,
    showSites: true,
    showLabels: true
};

let palette = {
    backgroundColor: '#191919',
    circumcircleColor: '#FFFFFF',
    bisectorColor: '#ff575a',
    segmentColor: '#23ded8',
    midpointColor: '#00ba51',
    intersectionColor: '#e1ff00',
    siteColor: '#FFFFFF',
    labelColor: '#6b6bff'
};

let hiddenControls = {
    showArrowTip: false
};