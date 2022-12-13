const sketch = (
  /** @type {import("p5").p5InstanceExtensions} */
  p5
) => {
  p5.setup = () => {
    p5.createCanvas(600, 600);
  };

  p5.updateWithProps = props => {
    const sizeChanged =
      props.width &&
      props.height &&
      (p5.width !== props.width || p5.height !== props.height);

    if (sizeChanged) p5.resizeCanvas(props.width, props.height);
  };

  p5.draw = () => {
    p5.background(20);

    p5.circle(p5.frameCount % p5.width, p5.height / 2, 10);
  };
};

export default sketch;
