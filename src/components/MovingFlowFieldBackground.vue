<template>
    <div>
        <div ref="p5Container"></div>
    </div>
</template>

<script>
import p5 from 'p5';
import { onMounted, ref } from "vue";

export default {
    name: 'MovingFlowFieldBackground',
    setup() {
        const p5Container = ref(null);

        onMounted(() => {
            new p5(sketch, p5Container.value);
        });

        const sketch = (p5) => {
            let particles = [];
            const particleCount = 6000;
            var noiseScale

            var r1
            var r2
            var g1
            var g2
            var b1
            var b2

            p5.setup = () => {
                p5.createCanvas(window.innerWidth, window.innerHeight);
                for (let i = 0; i < particleCount; i++) {
                    particles.push(p5.createVector(p5.random(p5.width), p5.random(p5.height)));
                }



                noiseScale = p5.random(0.006, 0.12);
                r1 = p5.random(255)
                r2 = p5.random(255)
                g1 = p5.random(255)
                g2 = p5.random(255)
                b1 = p5.random(255)
                b2 = p5.random(255)
            };

            p5.draw = () => {
                p5.background(0, 10);

                for (let i = 0; i < particles.length; i++) {
                    let p = particles[i];

                    var r = p5.map(particles[i].x, 0, p5.width, r1, r2)
                    var g = p5.map(particles[i].y, 0, p5.height, g1, g2)
                    var b = p5.map(particles[i].x, 0, p5.width, b1, b2)

                    const distanceToBorder = Math.min(
                        particles[i].x, p5.width - particles[i].x,
                        particles[i].y, p5.height - particles[i].y
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
        return {
            p5Container
        }
    },
}
</script>

<style lang="scss" scoped></style>