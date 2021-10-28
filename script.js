let bubbles;

function setup() {
    createCanvas(1900, 840);
    frameRate(30)
    bubbles = [];
    for (let i = 0; i <= 70; i++) {
        const bubble = new Bubble(random(width), random(height), random(50, 70))
        bubbles.push(bubble)
    }
}

function draw() {
    background(255)
    bubbles.forEach(bubble => {
        bubble.show()
        bubble.move()
        bubble.putLimit()
    });

}

function mousePressed() {
    bubbles.forEach(bubble => {
        bubble.changeColor(mouseX, mouseY)
    })
}

function mouseDragged() {
    bubbles.forEach(bubble => {
        bubble.dragged(mouseX, mouseY)
    })
}

class Bubble {
    constructor(x, y, r) {
        this.x = x, this.y = y, this.r = r, this.brightness = 160, this.color1 = random(255), this.color2 = random(255), this.color3 = random(255), this.move_speed = 5
    }

    show() {
        fill(this.color1, this.color2, this.color3, this.brightness);
        noStroke()
        circle(this.x, this.y, this.r * 2);
        this.brightness = 200
    }

    move() {
        this.x += random(-this.move_speed, this.move_speed)
        this.y += random(-this.move_speed, this.move_speed)
    }

    changeColor(mx, my) {
        let d = dist(mx, my, this.x, this.y)
        if (d <= this.r) {
            this.color1 = random(255);
            this.color2 = random(255);
            this.color3 = random(255);
        }
    }

    putLimit() {
        if (this.x >= width) {
            this.x -= this.move_speed
        }

        if (this.x <= 0) {
            this.x += this.move_speed;
        }

        if (this.y >= height) {
            this.y -= this.move_speed
        }

        if (this.y <= 0) {
            this.y += this.move_speed
        }
    }

    dragged(mx, my) {
        let d = dist(mx, my, this.x, this.y)
        if (d <= this.r) {
            this.x = mx;
            this.y = my;
            this.brightness = 255;
        }
    }
}