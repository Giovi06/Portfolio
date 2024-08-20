<template>
    <div>
        <div ref="p5Container"></div>
    </div>
</template>

<script>
import p5 from "p5";
import { onMounted, onBeforeUnmount, ref } from "vue";

export default {
    name: "MovingFlowFieldBackground",
    setup() {
        const p5Container = ref(null);
        let p5Instance = null; // Store the p5 instance

        const sketch = (p5) => {
            let particles = [];
            const particleCount = 6000;
            let noiseScale;

            let r1, r2, g1, g2, b1, b2;

            p5.setup = () => {
                p5.createCanvas(window.innerWidth, window.innerHeight);
                particles = [];
                for (let i = 0; i < particleCount; i++) {
                    particles.push(p5.createVector(p5.random(p5.width), p5.random(p5.height)));
                }

                noiseScale = p5.random(0.006, 0.12);
                r1 = p5.random(255);
                r2 = p5.random(255);
                g1 = p5.random(255);
                g2 = p5.random(255);
                b1 = p5.random(255);
                b2 = p5.random(255);
            };

            p5.draw = () => {
                p5.background(0, 10);

                for (let i = 0; i < particles.length; i++) {
                    let p = particles[i];

                    const r = p5.map(particles[i].x, 0, p5.width, r1, r2);
                    const g = p5.map(particles[i].y, 0, p5.height, g1, g2);
                    const b = p5.map(particles[i].x, 0, p5.width, b1, b2);

                    const distanceToBorder = Math.min(
                        particles[i].x,
                        p5.width - particles[i].x,
                        particles[i].y,
                        p5.height - particles[i].y
                    );

                    const alpha = p5.map(distanceToBorder, 0, 200, 0, 200);

                    p5.stroke(r, g, b, alpha);
                    p5.point(p.x, p.y);
                    let n = p5.noise(p.x * noiseScale, p.y * noiseScale);
                    let angle = p5.map(n, 0, 1, 0, p5.TWO_PI);

                    p.x += p5.cos(angle);
                    p.y += p5.sin(angle);

                    if (!p5.onScreen(p)) {
                        p.x = p5.random(p5.width);
                        p.y = p5.random(p5.height);
                    }
                }
            };

            p5.mouseReleased = () => {
                p5.noiseSeed(p5.millis());
                noiseScale = p5.random(0.006, 0.12);
            };

            p5.onScreen = (v) => {
                return v.x > 0 && v.x < p5.width && v.y > 0 && v.y < p5.height;
            };
        };

        const initializeSketch = () => {
            if (p5Instance) p5Instance.remove(); // Remove the existing instance
            p5Instance = new p5(sketch, p5Container.value); // Create a new p5 instance
        };

        const handleWindowSizeChange = () => {
            initializeSketch(); // Reinitialize p5 when the window is resized
        };

        onMounted(() => {
            initializeSketch();
            window.addEventListener("resize", handleWindowSizeChange); // Listen for window resize
        });

        onBeforeUnmount(() => {
            window.removeEventListener("resize", handleWindowSizeChange); // Clean up the event listener
            if (p5Instance) p5Instance.remove(); // Clean up p5 instance
        });

        return {
            p5Container,
        };
    },
};
</script>

<style scoped>
/* You can add your styles here */
</style>