<template>
    <div>
        <div ref="p5Container"></div>
    </div>
</template>

<script>
import p5 from "p5";
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
    setup() {
        const p5Container = ref(null);
        let p5Instance = null;

        const createSketch = () => {
            return (p5) => {
                let points = [];
                let mult;

                let r1, r2, g1, g2, b1, b2;

                const initializePoints = () => {
                    const width = p5.width;
                    const height = p5.height;

                    let density = p5.random(25, 70);
                    let space = width / density;

                    points = [];
                    for (let x = 0; x < width; x += space) {
                        for (let y = 0; y < height; y += space) {
                            let p = p5.createVector(
                                x + p5.random(-10, 10),
                                y + p5.random(-10, 10)
                            );
                            points.push(p);
                        }
                    }

                    mult = p5.random(0.003, 0.01);
                    r1 = p5.random(255);
                    r2 = p5.random(255);
                    g1 = p5.random(255);
                    g2 = p5.random(255);
                    b1 = p5.random(255);
                    b2 = p5.random(255);
                };

                p5.setup = () => {
                    p5.createCanvas(p5.windowWidth, p5.windowHeight);
                    p5.background("#242424");
                    p5.angleMode(p5.DEGREES);
                    p5.noiseDetail(1);
                    initializePoints(); // Initialize points on setup
                };

                p5.draw = () => {
                    p5.noStroke();

                    for (let i = 0; i < points.length; i++) {
                        let r = p5.map(points[i].x, 0, p5.width, r1, r2);
                        let g = p5.map(points[i].y, 0, p5.height, g1, g2);
                        let b = p5.map(points[i].x, 0, p5.width, b1, b2);

                        const distanceToBorder = Math.min(
                            points[i].x,
                            p5.width - points[i].x,
                            points[i].y,
                            p5.height - points[i].y
                        );

                        const alpha = p5.map(distanceToBorder, 0, 200, 0, 350);

                        p5.fill(r, g, b, alpha);

                        let angle = p5.map(
                            p5.noise(points[i].x * mult, points[i].y * mult),
                            0,
                            1,
                            0,
                            720
                        );

                        points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)));

                        p5.ellipse(points[i].x, points[i].y, 1);
                    }
                };

                p5.windowResized = () => {
                    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
                    initializePoints(); // Reinitialize points when the window is resized
                };
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