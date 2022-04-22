function setup() {
  createCanvas(windowWidth, windowHeight);
  edgeLength = 10000;

  // let min = -400;
  // let max = 400;
  // site_A = new Site(random(min, max), random(min, max));
  // site_B = new Site(random(min, max), random(min, max));
  // site_C = new Site(random(min, max), random(min, max));

  site_A = new Site(150, 150, 'A');
  site_B = new Site(-150, -150, 'B');
  site_C = new Site(500, -100, 'C');
}
  
function draw() {
  background(25);
  translate(windowWidth/2, windowHeight/2);
  scale(1, -1);

  AB = new SitePair(site_A, site_B);
  BC = new SitePair(site_B, site_C);
  CA = new SitePair(site_C, site_A);

  ABC = new Intersection(AB, BC);
  BCA = new Intersection(BC, CA);
  CAB = new Intersection(CA, AB);


  // ABC.drawCircumcircle(); // This method can be called on ony permutation of ABC


  ABC.drawBisectorFromIntersection();
  BCA.drawBisectorFromIntersection();
  CAB.drawBisectorFromIntersection();

  // AB.drawSlopeVec();
  // BC.drawSlopeVec();
  // CA.drawSlopeVec();

  // ABC.displayAngleBetweenValue();
  // BCA.displayAngleBetweenValue();
  // CAB.displayAngleBetweenValue()

  // AB.drawMidpoint();
  // BC.drawMidpoint();
  // CA.drawMidpoint();
  
  // ABC.drawIntersection(); // This method can be called on ony permutation of ABC

  site_A.show();
  site_B.show();
  site_C.show();

  site_A.showLabel();
  site_B.showLabel();
  site_C.showLabel();
  
}