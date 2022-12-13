import Star from "./Star";

const sketch = (
  /** @type {import("p5").p5InstanceExtensions} */
  p5
) => {
  let stars = [];
  const starCount = 800;

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);

    stars = Array(starCount)
      .fill()
      .map(() => new Star(p5));
  };

  p5.draw = () => {
    p5.background(0);

    p5.translate(p5.width / 2, p5.height / 2);
    stars.forEach(star => star.update());
  };
};

export default sketch;
