<template>
    <div ref="p5Container"></div>
</template>

<script>
import { onMounted, ref, onBeforeUnmount } from "vue";
import p5 from "p5";

export default {
    name: "InteractiveBackground",
    setup() {
        const p5Container = ref(null);
        let p5Instance = null;

        let r1, r2, g1, g2, b1, b2;

        const createSketch = () => {
            return (p) => {
                let points = [];

                const initializePoints = () => {
                    points = [];
                    for (let i = 0; i < 500; i++) {
                        points.push(new Point(p));
                    }

                    r1 = p.random(255);
                    r2 = p.random(255);
                    g1 = p.random(255);
                    g2 = p.random(255);
                    b1 = p.random(255);
                    b2 = p.random(255);
                };

                p.setup = () => {
                    p.createCanvas(p.windowWidth, p.windowHeight);
                    initializePoints(); // Initialize points on setup
                };

                p.draw = () => {
                    p.background("#242424");
                    for (let point of points) {
                        let r = p.map(point.x, 0, p.width, r1, r2);
                        let g = p.map(point.y, 0, p.height, g1, g2);
                        let b = p.map(point.x, 0, p.width, b1, b2);

                        const distanceToBorder = Math.min(
                            point.x,
                            p.width - point.x,
                            point.y,
                            p.height - point.y
                        );

                        const alpha = p.map(distanceToBorder, 0, 200, 0, 200);

                        point.move();
                        point.display(r, g, b, alpha);
                    }
                };

                p.windowResized = () => {
                    p.resizeCanvas(p.windowWidth, p.windowHeight);
                    initializePoints(); // Reinitialize points when the window is resized
                };

                class Point {
                    constructor(p) {
                        this.p = p;
                        this.x = p.random(p.width);
                        this.y = p.random(p.height);
                        this.vx = p.random(-1, 1);
                        this.vy = p.random(-1, 1);
                    }

                    move() {
                        this.x += this.vx;
                        this.y += this.vy;
                        if (this.x < 0 || this.x > this.p.width) this.vx *= -1;
                        if (this.y < 0 || this.y > this.p.height) this.vy *= -1;
                    }

                    display(r, g, b, alpha) {
                        this.p.fill(r, g, b, alpha);
                        this.p.noStroke();
                        this.p.ellipse(this.x, this.y, 5);
                    }
                }
            };
        };

        const initializeP5 = () => {
            if (p5Instance) {
                p5Instance.remove(); // Remove the existing instance
            }
            p5Instance = new p5(createSketch(), p5Container.value); // Create a new p5 instance
        };

        onMounted(() => {
            initializeP5(); // Initialize the sketch on component mount
        });

        onBeforeUnmount(() => {
            if (p5Instance) {
                p5Instance.remove(); // Clean up the p5 instance
            }
        });

        return {
            p5Container,
        };
    },
};
</script>

<style scoped></style>