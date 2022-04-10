class Site {
    constructor (x, y, label) {
        this.x = x;
        this.y = y;
        this.label = label
    }

    show() {
        push();
        fill(0);
        stroke(255);
        strokeWeight(2);
        ellipse(this.x, this.y, 15, 15);
        pop();
    }

    showLabel() {
        push();
        
        translate(this.x, this.y)
        scale(1, -1);

        noStroke();
        fill('#6b6bff');
        textSize(32);
        text(this.label, 30, 0)

        pop();
    }
}

class SitePair {
    constructor (site_1, site_2) {
        this.site_1 = site_1;
        this.site_2 = site_2;
        this.coeffiecients = this.getStandardFormOfBisector();
    }
    
    getMidpointSite() {
        let midx = (this.site_1.x + this.site_2.x)/2;
        let midy = (this.site_1.y + this.site_2.y)/2;
        return new Site(midx, midy);
    }

    getNumericSlope(vec) {
        return vec.y/vec.x;
    }

    getPerpendicularVec() {
        return this.getSlopeVec().rotate(-PI/2);
    }

    getSlopeVec() {
        return createVector(this.site_2.x - this.site_1.x, this.site_2.y - this.site_1.y);
    }

    getStandardFormOfBisector() {
        let A;
        let B;
        let C;

        let perpendicularVec = this.getPerpendicularVec();
        let midpoint = this.getMidpointSite();

        // If the x component of the vector is 0
        // then there is no difference between the x values of the sites
        // therefore the line is vertical
        if (perpendicularVec.x == 0) {
            A = 1;
            B = 0;
            C = midpoint.x;
        }
        else {
            A = -this.getNumericSlope(perpendicularVec);
            B = 1;
            C = -this.getNumericSlope(perpendicularVec) * midpoint.x + midpoint.y; // y intercept =  -mx + y
        }

        return {A: A, B: B, C: C}; // Ax + By = C
    }    
    
}

class Intersection {
    constructor (pair_1, pair_2) {
        this.pair_1 = pair_1;
        this.pair_2 = pair_2;
    }

    getIntersection() {
        let A = math.matrix([[this.pair_1.coeffiecients.A, this.pair_1.coeffiecients.B], [this.pair_2.coeffiecients.A, this.pair_2.coeffiecients.B]]);
        
        let intersection;

        if (math.det(A) != 0) {
            let Ainv = math.inv(A);
            let b = math.matrix([[this.pair_1.coeffiecients.C],[this.pair_2.coeffiecients.C]]);
            intersection = math.multiply(Ainv, b);
        } 
        else {
            intersection = null;
            return null;
        }

        return createVector(intersection._data[0][0], intersection._data[1][0]);
    }

    drawIntersection() {
        let intersection = this.getIntersection()

        if (intersection != null) {
            push();
            fill(0);
            stroke(255);
            strokeWeight(2);
            ellipse(intersection.x, intersection.y, 15, 15);
            pop();
        }

    }

    drawBisectorFromIntersection() {
        let perpendicular = this.pair_1.getPerpendicularVec();
        let intersection = this.getIntersection();
        if (intersection != null) {
            this.drawHalfLine_1(intersection, perpendicular, '#ff575a');
            this.drawHalfLine_2(intersection, perpendicular, '#ff575a');
        }
    }

    drawHalfLine_1(base, vec, myColor) {
        push();
        stroke(myColor);
        strokeWeight(2);
        fill(myColor);
    
        translate(base.x, base.y);
        vec.setMag(edgeLength)
        line(0, 0, vec.x, vec.y);
    
        pop();
    }

    drawHalfLine_2(base, vec, myColor) {
        push();
        stroke(myColor);
        strokeWeight(2);
        fill(myColor);
    
        translate(base.x, base.y);
        vec.setMag(edgeLength)
        line(0, 0, -vec.x, -vec.y);
    
        pop();
    }
}
  
