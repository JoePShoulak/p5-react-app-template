class Star {
  constructor(
    /** @type {import("p5").p5InstanceExtensions} */
    p5
  ) {
    this.p5 = p5;

    this.reset();
    this.z = p5.random(p5.width);
    this.prevZ = this.z;

    this.maxSpeed = 20;
  }

  get radius() {
    return this.p5.map(this.z, 0, this.p5.width, 16, 0);
  }

  get zPos() {
    return this.mapPos(this.z);
  }

  get prevZPos() {
    return this.mapPos(this.prevZ);
  }

  get speed() {
    const rawSpeed = this.p5.map(this.p5.mouseX, 0, this.p5.width, 0, 50);
    return Math.min(rawSpeed, this.maxSpeed);
  }

  mapPos(div) {
    return {
      x: this.p5.map(this.x / div, 0, 1, 0, this.p5.width),
      y: this.p5.map(this.y / div, 0, 1, 0, this.p5.height),
    };
  }

  reset() {
    this.z = this.p5.width;
    this.x = this.p5.random(-this.p5.width, this.p5.width);
    this.y = this.p5.random(-this.p5.height, this.p5.height);

    this.prevZ = this.z;
  }

  update() {
    this.z -= this.speed;

    if (this.z < 1) this.reset();

    this.draw();

    this.prevZ = this.z;
  }

  draw() {
    this.p5.noStroke();
    this.p5.circle(this.zPos.x, this.zPos.y, this.radius);
    this.p5.stroke(255);

    if (this.radius > 1)
      this.p5.line(this.prevZPos.x, this.prevZPos.y, this.zPos.x, this.zPos.y);
  }
}

export default Star;
