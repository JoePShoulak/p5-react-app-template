import Star from "./Star";

const sketch = (
  /** @type {import("p5").p5InstanceExtensions} */
  p5
) => {
  let newWidth;
  let newHeight;

  p5.updateWithProps = props => {
    newWidth = props.width;
    newHeight = props.height;
  };

  let stars = [];
  const starCount = 800;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.stroke(255);

    stars = Array(starCount)
      .fill()
      .map(() => new Star(p5));
  };

  p5.draw = () => {
    if (p5.width !== newWidth || p5.height !== newHeight)
      p5.resizeCanvas(newWidth, newHeight);

    p5.background(0);

    p5.translate(p5.width / 2, p5.height / 2);
    stars.forEach(star => star.update());
  };
};

export default sketch;
