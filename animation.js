function setup() {
  createCanvas(windowWidth, windowHeight);
  edgeLength = Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight, 2));

  let min = -400;
  let max = 400;
  site_A = new Site(random(min, max), random(min, max));
  site_B = new Site(random(min, max), random(min, max));
  site_C = new Site(random(min, max), random(min, max));
  console.log(site_A);
  console.log(site_B);
  console.log(site_C);
}
  
function draw() {
  background(0);
  translate(windowWidth/2, windowHeight/2);
  scale(1, -1);
  
  // site_A.x = mouseX - windowWidth/2
  // site_A.y = -mouseY + windowHeight/2;

  site_A.show();
  site_B.show();
  site_C.show();

  let AB = new SitePair(site_A, site_B);
  AB.drawBisector();

  let BC = new SitePair(site_B, site_C);
  BC.drawBisector();

  let AC = new SitePair(site_A, site_C);
  AC.drawBisector();

  let tmpI = new Intersection(AB, BC);
  tmpI.drawIntersection();

}