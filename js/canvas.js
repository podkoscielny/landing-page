const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const navigation = document.querySelector("nav");
const header = document.querySelector("header");

let cw = canvas.width = window.innerWidth;
let ch = canvas.height = window.innerHeight;

const drops = [];
const colors = ["rgb(232, 12, 227)", "rgba(94, 17, 178)"];

let frameCounter = 0;

class RainDrop {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.velocity = 0.2;
    }

    update() {
        if (this.y > header.offsetHeight) return;
        if (this.y < navigation.offsetHeight - (this.size / 2)) {
            this.y += 0.2;
        } else {
            this.y += this.velocity;
        }
        this.velocity += 0.2;
        this.draw();
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x - (this.size - 10), this.y + this.size, this.x + (this.size - 10), this.y + this.size, this.x, this.y);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}


const createDrop = () => {
    const maxDrops = Math.floor(Math.random() * 3 + 1);
    for (let i = 0; i < maxDrops; i++) {
        const radius = 40;
        const x = Math.random() * (cw - radius) + radius;
        const y = Math.random() * 30;
        const color = Math.floor(Math.random() * 2);
        drops.push(new RainDrop(x, y, radius, colors[color]));
    }
}

const animate = () => {
    requestAnimationFrame(animate);
    if (cw >= 1024) {
        frameCounter++;
        ctx.clearRect(0, 0, cw, ch);
        if (frameCounter > 10) {
            createDrop();
            frameCounter = 0;
        }
        drops.forEach(drop => drop.update());
    }
}

animate();

if (window.innerWidth >= 1024) {
    window.addEventListener("resize", () => {
        location.reload();
    });
} else {
    window.addEventListener("orientationchange", () => {
        location.reload();
    })
}