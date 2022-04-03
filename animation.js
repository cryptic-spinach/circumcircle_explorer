function setup() {
  createCanvas(windowWidth, windowHeight);
  edgeLength = Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight, 2))
  site_A = new Site(350, 200);
  site_B = new Site(-400, -200);
  site_C = new Site(500, -100);

}
  
function draw() {
  background(0);
  translate(windowWidth/2, windowHeight/2);
  scale(1, -1);
  
  // site_B.x = mouseX - windowWidth/2
  // site_B.y = -mouseY + windowHeight/2;

  site_A.show();
  site_B.show();
  site_C.show();

  let tempAB = new SitePair(site_A, site_B);
  tempAB.drawBisector();

  let tempBC = new SitePair(site_B, site_C);
  tempBC.drawBisector();

  let tmpI= new Intersection(tempAB, tempBC);
  tempIntersection = tmpI.getIntersection();

}