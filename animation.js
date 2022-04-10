function setup() {
  createCanvas(windowWidth, windowHeight);
  edgeLength = 10000;

  // let min = -400;
  // let max = 400;
  // site_A = new Site(random(min, max), random(min, max));
  // site_B = new Site(random(min, max), random(min, max));
  // site_C = new Site(random(min, max), random(min, max));

  site_A = new Site(350, 200, 'A');
  site_B = new Site(-400, -200, 'B');
  site_C = new Site(500, -100, 'C');
}
  
function draw() {
  background(25);
  translate(windowWidth/2, windowHeight/2);
  scale(1, -1);

  site_A.show();
  site_B.show();
  site_C.show();

  site_A.showLabel();
  site_B.showLabel();
  site_C.showLabel();

  AB = new SitePair(site_A, site_B);
  BC = new SitePair(site_B, site_C);
  CA = new SitePair(site_A, site_C);

  ABC = new Intersection(AB, BC);
  BCA = new Intersection(BC, CA);
  CAB = new Intersection(CA, AB);

  ABC.drawBisectorFromIntersection();
  BCA.drawBisectorFromIntersection();
  CAB.drawBisectorFromIntersection();

  AB.drawMidpoint();
  BC.drawMidpoint();
  CA.drawMidpoint();

  ABC.drawIntersection();
}