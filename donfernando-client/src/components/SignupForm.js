import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const SignUpForm = () => {
  return (
    <Box component="form">
      <Box sx={{ paddingTop: "1rem" }}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First name"
        />{" "}
        <TextField required id="lastName" name="lastName" label="Last name" />{" "}
        <TextField id="phoneNumber" name="phoneNumber" label="Phone Number" />{" "}
        <TextField
          required
          id="emailAddress"
          name="emailAddress"
          label="Email Address"
        />{" "}
        <TextField
          required
          id="homeAddress"
          name="homeAddress"
          label="Home Address"
        />{" "}
      </Box>
    </Box>
  );
};

export default SignUpForm;
