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
    
    getMidpointVec() {
        let midx = (this.site_1.x + this.site_2.x)/2;
        let midy = (this.site_1.y + this.site_2.y)/2;
        return createVector(midx, midy);
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
        let midpoint = this.getMidpointVec();

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
    
    drawMidpoint() {
        push();
        let midpoint = this.getMidpointVec();
        fill(0);
        stroke('#00ba51');
        strokeWeight(2);
        ellipse(midpoint.x, midpoint.y, 15, 15);
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
        let intersection = this.getIntersection();
        if (intersection != null) {
            // this.drawHalfLine_1(intersection, perpendicular, '#ff575a');
            // this.drawHalfLine_2(intersection, perpendicular, '#ff575a');
            let intersectToMidpointVec = this.getIntersectToMidpointVec();
            this.drawFullLine(intersection, intersectToMidpointVec, '#ff575a');
        }
        else {
            console.log('Intersection is null');
        }
    }

    getIntersectToMidpointVec() {
        let intersection = this.getIntersection();
        let midpoint = this.pair_1.getMidpointVec();
        return createVector(intersection.x - midpoint.x, intersection.y -  midpoint.y);
    }

    drawFullLine(base, vec, myColor) {
        push();
        stroke(myColor);
        strokeWeight(2);
        fill(myColor);
        translate(base.x, base.y);
        rotate(PI);
        vec.setMag(edgeLength);
        line(0, 0, vec.x, vec.y);
        pop();
    }

    drawHalfLine_1(base, vec, myColor) {
        push();
        stroke(myColor);
        strokeWeight(2);
        fill(myColor);
    
        translate(base.x, base.y);
        vec.setMag(edgeLength);
        line(0, 0, vec.x, vec.y);
    
        pop();
    }

    drawHalfLine_2(base, vec, myColor) {
        push();
        stroke(myColor);
        strokeWeight(2);
        fill(myColor);
    
        translate(base.x, base.y);
        vec.setMag(edgeLength);
        line(0, 0, -vec.x, -vec.y);
    
        pop();
    }

    drawCircumcircle() {
        let intersection = this.getIntersection();
        if (intersection != null) {
            push();
            noFill();
            stroke(255);
            let x = this.pair_1.site_1.x;
            let y = this.pair_1.site_1.y;
            let r = 2 * Math.sqrt(Math.pow(intersection.x - x, 2) + Math.pow(intersection.y - y, 2)) 
            ellipse(intersection.x, intersection.y, r, r)
            pop();
        }
    }
}


  
