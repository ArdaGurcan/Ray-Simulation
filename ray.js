class Ray {
    constructor(pos, angle) {
        this.pos = pos;
        this.dir = angle
    }
    show() {
        strokeWeight(2)
        stroke("#e6d945");
        push()
        translate(this.pos.x, this.pos.y)
        rotate(this.dir)
        line(0, 0, 100, 0);        
        pop()
    }

    setDir(x, y) {
        this.dir = atan2(y - this.pos.y, x - this.pos.x)
    }

    // setAngle(angle) {
    //     this.dir = angle
    // }
    intersect(wall) {
        const x1 = wall.a.x;
        const y1 = wall.a.y;
        const x2 = wall.b.x;
        const y2 = wall.b.y;

        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + cos(this.dir)*10;
        const y4 = this.pos.y + sin(this.dir)*10;

        if ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4) == 0) {
            return 
        }
        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4))
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4))
        if (t < 1 && 0 < t && 0 < u) {
            const pt = createVector(x1 + t * (x2 - x1), y1 + t * (y2 - y1))
            return pt
        } else {
            return 
        }

    }
}