var rays = [];
var walls = [];
const n = 200;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style("display", "block");
    for (let i = 0; i < 360; i += 360 / n) {
        rays.push(new Ray(createVector(400, 400), radians(i)));
    }
    for (let i = 0; i < 15; i++) {
        let x1 = random(100, width-100);
        let x2 = x1 + random(50, 100);
        let y1 = random(100, height-100);
        let y2 = y1 + random(50, 100);

        walls.push(new Boundary(x1, y1, x2, y1));
        walls.push(new Boundary(x2, y1, x2, y2));
        walls.push(new Boundary(x2, y2, x1, y2));
        walls.push(new Boundary(x1, y2, x1, y1));
    }

    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(0, 0, 0, height));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(0, height, width, height));
}

function draw() {
    background(50, 50, 60);

    for (let r = 0; r < rays.length; r++) {
        if (mouseX) {
            rays[r].pos = createVector(mouseX, mouseY);
        }
        let record = Infinity;
        let closest = null;

        for (let i = 0; i < walls.length; i++) {
            walls[i].show();

            let pt = null;

            pt = rays[r].intersect(walls[i]);
            if (pt) {
                d = (rays[r].pos.x - pt.x) ** 2 + (rays[r].pos.y - pt.y) ** 2;
                if (d < record) {
                    record = d;
                    closest = pt;
                }
            }
        }
        if (closest) {
            pt = closest;
        }
        if (pt) {
            strokeWeight(2);
            stroke(230, 217, 69, 90);
            line(rays[r].pos.x, rays[r].pos.y, pt.x, pt.y);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}