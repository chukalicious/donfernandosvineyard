import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const About = () => {
  const paperStyle = {
    width: "90%",
    margin: "0 auto",
    padding: ".5rem",
  };
  return (
    <Box>
      <Paper elevation={0} style={paperStyle}>
        <Typography align="center" component="h2" variant="h6" noWrap>
          Dos Fernandos' Vineyard
        </Typography>
        <Typography>
          Dos Fernandos' Vineyards is a small, family-owned vineyard, nestled in
          the heart of Temecula Wine Country in Southern California.{" "}
        </Typography>
        <Typography>
          We are in the early stages of starting a club that will allow us to
          share our wine with more people. We would love for you to join and
          enjoy the wine with us.
        </Typography>
        <Typography>
          Our wines are all artisanal, "small batch wines", from grapes that are
          100% Estate Grown, hand harvested, and lovingly tended throughout the
          fermentation process. We're excited to share our passion and bring
          this experience to you.
        </Typography>
        <Typography>DF Wine Team</Typography>
      </Paper>
    </Box>
  );
};

export default About;
