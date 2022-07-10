import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SignUpForm = () => {
  const provisionaryStyle = {
    marginTop: "1rem",
  };

  const buttonStyles = {
    width: "60%",
    margin: "3rem auto",
    padding: ".5rem",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <Box
      sx={{
        paddingTop: "1rem",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        maxWidth: "45%",
      }}
    >
      <Typography>Ready to join our club and enjoy more wine?! </Typography>
      <Typography>
        Fill in how much wine you want and how to get it to you below!{" "}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          style={provisionaryStyle}
          required
          id="firstName"
          name="firstName"
          label="First name"
        />{" "}
        <TextField
          style={provisionaryStyle}
          required
          id="lastName"
          name="lastName"
          label="Last name"
        />{" "}
        <TextField
          style={provisionaryStyle}
          required
          id="emailAddress"
          name="emailAddress"
          label="Email Address"
        />{" "}
        <TextField
          required
          style={provisionaryStyle}
          id="homeAddressLine1"
          name="homeAddressLine1"
          label="Home Address Line 1"
        />{" "}
        <TextField
          style={provisionaryStyle}
          id="homeAddressLine2"
          name="homeAddressLine"
          label="Home Address Line 2"
        />{" "}
        <TextField
          required
          style={provisionaryStyle}
          id="city"
          name="city"
          label="City"
        />{" "}
        <TextField
          required
          style={provisionaryStyle}
          id="state"
          name="state"
          label="State"
        />{" "}
        <TextField
          required
          style={provisionaryStyle}
          id="zipCode"
          name="zipCode"
          label="Zip Code"
        />{" "}
        <TextField
          style={provisionaryStyle}
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
        />{" "}
        <Button type="submit" style={buttonStyles} variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default SignUpForm;
