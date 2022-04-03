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
        this.coeffiecients = this.getStandardForm();
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

        let perpendicularVec = this.getPerpendicularVec();
        let midpoint = this.getMidpoint()

        if (perpendicularVec.x == 0) {
            A = 1;
            B = 0;
            C = midpoint.x;
        }
        else {
            A = -this.getNumericSlope(perpendicularVec);
            B = 1;
            C = -this.getNumericSlope(perpendicularVec) * midpoint.x + midpoint.y;
        }

        return {A: A, B: B, C: C};
    }

    drawBisector() {
        let perpendicular = this.getPerpendicularVec();
        let midpoint = this.getMidpoint();
        this.drawLine(midpoint, perpendicular, 'orange');
    }

    drawLine(base, vec, myColor) {
        push();
        stroke(myColor);
        strokeWeight(2);
        fill(myColor);
    
        translate(base.x, base.y);
        vec.setMag(edgeLength)
        line(-vec.x, -vec.y, vec.x, vec.y);
    
        pop();
    }
}

class Intersection {
    constructor (pair_1, pair_2) {
        this.pair_1 = pair_1;
        this.pair_2 = pair_2;
    }

    getIntersection() {
        let A = math.matrix([[this.pair_1.coeffiecients.A, this.pair_1.coeffiecients.B], [this.pair_2.coeffiecients.A, this.pair_2.coeffiecients.B]])
        let Ainv = math.inv(A)
        let b = math.matrix([[this.pair_1.coeffiecients.C],[this.pair_2.coeffiecients.C]])
        let Ainvb = math.multiply(Ainv, b);

        fill(255);
        stroke(255);
        ellipse(Ainvb._data[0][0], Ainvb._data[1][0], 20, 20);

        return Ainvb._data
    }
}
  
