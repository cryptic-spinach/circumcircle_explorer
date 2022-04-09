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
        return this.getSlopeVec().rotate(-PI/2)
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

    drawBisectorUsingMidpoint(show_1, show_2) {
        let perpendicular = this.getPerpendicularVec();
        let midpoint = this.getMidpointSite();
        if (show_1) {
            this.drawHalfLine_1(midpoint, perpendicular, '#ff575a');
        }
        if (show_2) {
            this.drawHalfLine_2(midpoint, perpendicular, '#ff575a');
        }
    }

    drawHalfLine_1(base, vec, myColor) {
        push();
        stroke(myColor);
        strokeWeight(1.2);
        fill(myColor);
    
        translate(base.x, base.y);
        vec.setMag(edgeLength)
        line(0, 0, vec.x, vec.y);
    
        pop();
    }

    drawHalfLine_2(base, vec, myColor) {
        push();
        stroke(myColor);
        strokeWeight(1.2);
        fill(myColor);
    
        translate(base.x, base.y);
        vec.setMag(edgeLength)
        line(0, 0, -vec.x, -vec.y);
    
        pop();
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
        }

        return createVector(intersection._data[0][0], intersection._data[1][0]);
    }

    drawIntersection() {
        let intersection = this.getIntersection()

        if (intersection != null) {
            fill(84, 255, 107);
            noStroke()
            ellipse(intersection.x, intersection.y, 10, 10);
        }

    }

    drawBisectorFromIntersection(show_1, show_2) {
        let perpendicular = this.pair_1.getPerpendicularVec();
        let intersection = this.getIntersection();
        if (show_1) {
            this.drawHalfLine_1(intersection, perpendicular, '#ff575a');
        }
        if (show_2) {
            this.drawHalfLine_2(intersection, perpendicular, '#ff575a');
        }
    }

    drawHalfLine_1(base, vec, myColor) {
        push();
        stroke(myColor);
        strokeWeight(1.2);
        fill(myColor);
    
        translate(base.x, base.y);
        vec.setMag(edgeLength)
        line(0, 0, vec.x, vec.y);
    
        pop();
    }

    drawHalfLine_2(base, vec, myColor) {
        push();
        stroke(myColor);
        strokeWeight(1.2);
        fill(myColor);
    
        translate(base.x, base.y);
        vec.setMag(edgeLength)
        line(0, 0, -vec.x, -vec.y);
    
        pop();
    }
}
  
