import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const SignUpForm = () => {
  const provisionaryStyle = {
    marginTop: "1rem",
  };
  return (
    <Box
      component="form"
      sx={{
        paddingTop: "1rem",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        maxWidth: "45%",
      }}
    >
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
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
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
        id="homeAddress"
        name="homeAddress"
        label="Home Address"
      />{" "}
    </Box>
  );
};

export default SignUpForm;
