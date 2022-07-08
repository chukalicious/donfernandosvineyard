import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Awards = () => {
  const paperStyle = {
    width: "90%",
    margin: "0 auto",
    padding: ".5rem",
  };
  return (
    <Box>
      <Paper elevation="0" style={paperStyle}>
        <Typography align="center" component="h2" variant="h6" noWrap>
          We might need to change our labels...
        </Typography>
        <Typography align="center" component="h2" variant="h6" noWrap>
          ...Since our wine is award winning!
        </Typography>
        <Typography>
          For the second time, our winemaker Bert Wethers, enetered our wines
          into the amateur winemaker competition hosted by the San Diego County
          Fair znd again, he medalled.
        </Typography>
        <Typography>
          Of the 7 entries this year, every single one was awarded a medal! 5
          gold, 1 silver, and 1 bronze.
        </Typography>
        <Typography>
          You are sure to recognize some of your favorites with awards around
          their necks. Our Vermentino even placed "Best in Class"!
        </Typography>
        <Typography>
          We Want to take this opportunity to say congratulations, Bert, on a
          job well done. We are glad to be working with you in crafting and
          sharing these artisanal delights and look forward to the next round!
        </Typography>
        <Typography>
          Also, thank you all for supporting us in the harvesting, creating, and
          development of our wines. With your help, we have done some amazing
          things and achived new milestones... Or at least that's what we've
          heard...
        </Typography>
      </Paper>
    </Box>
  );
};

export default Awards;
