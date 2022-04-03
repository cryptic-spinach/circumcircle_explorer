function setup() {
  createCanvas(windowWidth, windowHeight);
  edgeLength = Math.sqrt(Math.pow(windowWidth/2, 2) + Math.pow(windowHeight/2, 2))
  site_A = new Site(0, 0);
  site_B = new Site(0, 0);
}
  
function draw() {
  background(0);
  translate(windowWidth/2, windowHeight/2);
  scale(1, -1);
  

  site_B.x = mouseX - windowWidth/2
  site_B.y = -mouseY + windowHeight/2;

  site_A.show();
  site_B.show();

  let tempPoint = new SitePair(site_A, site_B).drawBisector();
}