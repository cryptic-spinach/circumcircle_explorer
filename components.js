class Site {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        fill(255);
        stroke(255);
        ellipse(this.x, this.y, 5, 5);
    }
}

class SitePair {
    constructor (site_1, site_2) {
        this.site_1 = site_1;
        this.site_2 = site_2;
    }
    
    getMidpoint() {
        let midx = (this.site_1.x + this.site_2.x)/2;
        let midy = (this.site_1.y + this.site_2.y)/2;
        return new Site(midx, midy);
    }

    getNumericSlope(vec) {
        return vec.y/vec.x;
    }

    getPerpendicularVec() {
        return this.getSlopeVec().rotate(-PI/2)
    }

    getSlopeVec() {
        return createVector(this.site_2.x - this.site_1.x, this.site_2.y - this.site_1.y);
    }

    getStandardForm() {
        let A;
        let B;
        let C;

        let perpendicularVec = this.getSlopeVec();

        if (perpendicularVec.x == 0) {
            A = 1;
            B = 0;
            C = this.site_1.x;
        }
        else {
            A = -this.getNumericSlope(perpendicularVec);
            B = 1;
            C = -this.getNumericSlope(perpendicularVec) * this.site_1.x + this.site_1.y;
        }

        return {A: A, B: B, C: C}
    }

    drawBisector() {
        let perpendicular = this.getPerpendicularVec();
        let midpoint = this.getMidpoint();
        drawLine(midpoint, perpendicular, 'orange');
    }
}

function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);

    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());

    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
  }

  function drawLine(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(2);
    fill(myColor);

    translate(base.x, base.y);
    vec.setMag(edgeLength)
    line(-vec.x, -vec.y, vec.x, vec.y);

    pop();
  }
