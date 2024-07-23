<template>
    <div>
        <P5 :sketch="sketch" />
    </div>
</template>

<script setup>
import p5 from "p5"

const sketch = (p5) => {
    var points = []
    var mult;

    var r1
    var r2
    var g1
    var g2
    var b1
    var b2

    p5.setup = () => {

        const width = p5.windowWidth;
        const height = p5.windowHeight;

        p5.createCanvas(width, height)
        p5.background("#242424")
        p5.angleMode(p5.DEGREES)
        p5.noiseDetail(1)

        var density = p5.random(25, 70)
        var space = width / density;

        for (var x = 0; x < width; x += space) {
            for (var y = 0; y < height; y += space) {
                var p = p5.createVector(x + p5.random(-10, 10), y + p5.random(-10, 10))
                points.push(p)
            }
        }

        mult = p5.random(0.003, 0.01)
        r1 = p5.random(255)
        r2 = p5.random(255)
        g1 = p5.random(255)
        g2 = p5.random(255)
        b1 = p5.random(255)
        b2 = p5.random(255)
    }

    p5.draw = () => {
        p5.noStroke()

        for (var i = 0; i < points.length; i++) {

            var r = p5.map(points[i].x, 0, p5.width, r1, r2)
            var g = p5.map(points[i].y, 0, p5.height, g1, g2)
            var b = p5.map(points[i].x, 0, p5.width, b1, b2)

            // Calculate distance to the closest border
            const distanceToBorder = Math.min(
                points[i].x, p5.width - points[i].x,
                points[i].y, p5.height - points[i].y
            );

            // Set alpha based on distance to the closest border
            const alpha = p5.map(distanceToBorder, 0, 200, 0, 350);

            p5.fill(r, g, b, alpha)

            var angle = p5.map(p5.noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)

            points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))

            /* if (p5.dist(p5.width / 2, p5.height / 2, points[i].x, points[i].y) < 350) {}  Puts the Drawing into a circle */

            p5.ellipse(points[i].x, points[i].y, 1)
        }
    }
}
</script>


<style scoped></style>
