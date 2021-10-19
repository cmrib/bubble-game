let bubbles;

function setup() {
    createCanvas(600, 600);
    bubbles = [];
    for (let i = 0; i <= 10; i++) {
        const bubble = new Bubble(300, 300, random(50, 70))
        bubbles.push(bubble)
    }
}

function draw() {
    background(240)
    bubbles.forEach(bubble => {
        bubble.show()
        bubble.move()
    });
}

function mousePressed() {
    bubbles.forEach(bubble => {
        bubble.clicked(mouseX, mouseY)
    })
}

function mouseDragged() {
    bubbles.forEach(bubble => {
        bubble.dragged(mouseX, mouseY)
    })
}

class Bubble {
    constructor(x, y, r) {
        this.x = x, this.y = y, this.r = r, this.brightness = 160, this.color1 = random(255), this.color2 = random(255), this.color3 = random(255)
    }

    show() {
        fill(this.color1, this.color2, this.color3, this.brightness);
        noStroke()
        circle(this.x, this.y, this.r * 2);
        this.brightness = 160
    }

    move() {
        this.x += random(-5, 5)
        this.y += random(-5, 5)
    }

    clicked(mx, my) {
        let d = dist(mx, my, this.x, this.y)
        if (d <= this.r) {
            this.color1 = random(255);
            this.color2 = random(255);
            this.color3 = random(255);
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