import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const Hero = () => {
  const styles = {
    container: {
      disableGutters: true,
      maxWidth: "sm",
      component: "main",
      sx: { pt: 8, pb: 6 },
    },

    title: {
      component: "h1",
      variant: "h2",
      align: "center",
      color: "text.primary",
      gutterBottom: true,
    },

    body: {
      variant: "h5",
      align: "center",
      color: "text.secondary",
      component: "p",
    },
  };

  return (
    <Container {...styles.container}>
      <Typography {...styles.title}>App Title</Typography>
      <Typography>
        An App that does a Thing that's worth checking out because it is!
      </Typography>
    </Container>
  );
};

export default Hero;
