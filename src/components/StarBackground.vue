<template>
    <div ref="p5Container"></div>
</template>

<script>
import { onMounted, ref } from "vue";
import p5 from "p5";

export default {
    name: "InteractiveBackground",
    setup() {
        const p5Container = ref(null);

        var r1
        var r2
        var g1
        var g2
        var b1
        var b2

        onMounted(() => {
            new p5(sketch, p5Container.value);
        });

        const sketch = (p) => {
            let points = [];

            p.setup = () => {
                p.createCanvas(window.innerWidth, window.innerHeight);
                for (let i = 0; i < 500; i++) {
                    points.push(new Point(p));
                }
                r1 = p.random(255)
                r2 = p.random(255)
                g1 = p.random(255)
                g2 = p.random(255)
                b1 = p.random(255)
                b2 = p.random(255)
            };

            p.draw = () => {
                p.background("#242424");
                for (let point of points) {
                    var r = p.map(point.x, 0, p.width, r1, r2)
                    var g = p.map(point.y, 0, p.height, g1, g2)
                    var b = p.map(point.x, 0, p.width, b1, b2)

                    const distanceToBorder = Math.min(
                        point.x, p.width - point.x,
                        point.y, p.height - point.y
                    );

                    const alpha = p.map(distanceToBorder, 0, 200, 0, 200);

                    point.move();
                    point.display(r, g, b, alpha);

                }
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

                display(r, g, b) {
                    this.p.fill(r, g, b);
                    this.p.noStroke();
                    this.p.ellipse(this.x, this.y, 5);
                }
            }
        };

        return { p5Container };
    },
};
</script>

<style scoped></style>