const sketch = (
  /** @type {import("p5").p5InstanceExtensions} */
  p5
) => {
  p5.setup = () => {
    p5.createCanvas(600, 600);
  };

  let newWidth;
  let newHeight;

  p5.updateWithProps = props => {
    newWidth = props.width;
    newHeight = props.height;
  };

  p5.draw = () => {
    if (p5.width !== newWidth || p5.height !== newHeight)
      p5.resizeCanvas(newWidth, newHeight);

    p5.background(20);

    p5.circle(p5.frameCount % p5.width, p5.height / 2, 10);
  };
};

export default sketch;
