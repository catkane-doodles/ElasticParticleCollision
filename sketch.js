let particleSize = 10;

let width = 800;
let height = 800;

let fr = 30;
let cnv;
let z = 0;

let totalParticles = 1000;

let particles = [];
let player;

function setup() {
  frameRate(fr);

  // create dom
  cnv = createCanvas(width, height);

  noStroke();

  // let numberOfCircles = random(totalParticles);
  for (let i = 0; i < totalParticles; i++) {
    particles.push(
      new Particle(random(width), random(height), particleSize, random(100))
    );
  }
}

function draw() {
  background(255);

  for (let i = 0; i < totalParticles; i++) {
    particles[i].move();
    particles[i].show();
    for (let j = i + 1; j < totalParticles; j++) {
      if (particles[i].collides(particles[j])) {
        particles[i].resolveCollision(particles[j]);
      }
    }
  }
}
