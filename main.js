var rays = [];
var walls = [];
const n = 36;

function setup() {
    createCanvas(800, 800)
    for (let i = 0; i < 360; i += 360 / n) {
        rays.push(new Ray(createVector(400, 400), radians(i)))

    }
    for (let i = 0; i < 5; i++) {
        walls.push(new Boundary(random(0, width), random(0, width), random(0, height), random(0, height)));
    }
    walls.push(new Boundary(0, 0, width, 0))
    walls.push(new Boundary(0, 0, 0, height))
    walls.push(new Boundary(width, 0, width, height))
    walls.push(new Boundary(0, height, width, height))

}

function draw() {
    background(50, 50, 60)


    for (let r = 0; r < rays.length; r++) {
        if (mouseX) {
            rays[r].pos = createVector(mouseX, mouseY)

        }
        let record = Infinity;
        let closest = null;
        //rays[r].setAngle(radians(r))

        // rays[r].show()
        for (let i = 0; i < walls.length; i++) {
            walls[i].show()

            let pt = null

            pt = rays[r].intersect(walls[i])
            if (pt) {
                d = (rays[r].pos.x - pt.x) ** 2 + (rays[r].pos.y - pt.y) ** 2
                // d = dist(rays[r].pos.x, rays[r].pos.y, pt.x, pt.y)
                if (d < record) {
                    record = d;
                    closest = pt;
                }

            }
        }
        if (closest) {
            pt = closest

        }
        if (pt) {
            strokeWeight(2)
            stroke(230, 217, 69, 90);
            line(rays[r].pos.x, rays[r].pos.y, pt.x, pt.y);

        }


    }







}

function mousePressed() {

}