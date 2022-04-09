function setup() {
  createCanvas(windowWidth, windowHeight);
  edgeLength = Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight, 2));

  // let min = -400;
  // let max = 400;
  // site_A = new Site(random(min, max), random(min, max));
  // site_B = new Site(random(min, max), random(min, max));
  // site_C = new Site(random(min, max), random(min, max));

  site_A = new Site(350, 200);
  site_B = new Site(-400, -200);
  site_C = new Site(500, -100);
}
  
function draw() {
  background(0);
  translate(windowWidth/2, windowHeight/2);
  scale(1, -1);

  site_A.show();
  site_B.show();
  site_C.show();

  AB = new SitePair(site_A, site_B);
  BC = new SitePair(site_B, site_C);
  CA = new SitePair(site_A, site_C);

  ABC = new Intersection(AB, BC);
  BCA = new Intersection(BC, CA);
  CAB = new Intersection(CA, AB);

  ABC.drawBisectorFromIntersection(true, false);
  BCA.drawBisectorFromIntersection(true, false);
  CAB.drawBisectorFromIntersection(false, true);

  ABC.drawIntersection();
}