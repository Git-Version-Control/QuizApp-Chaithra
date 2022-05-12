import { Box, Button, TextField, Paper, Typography, Grow } from "@mui/material";
import { styled } from "@mui/material/styles";
import RadioButtons from "../components/buttons/RadioButtons";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledTextField = styled(TextField)({
  "& .MuiInputLabel-root ": {
    color: "#A9A9A9",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "inherit",
    },
  },
});

const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  marginTop: "6px",
  fontSize: "0.7rem",
}));

const InputDetailsFormHeading = () => (
  <Box>
    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
      Enter your details
    </Typography>
    <StyledText variant="body1">
      We take data privacy seriously. Be assured that your data is safe with us{" "}
    </StyledText>
  </Box>
);

const InputDetailsFormBody = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="form"
      sx={{ marginTop: "2rem" }}
      onSubmit={() => navigate("/questions/")}
    >
      <Box>
        <StyledTextField
          fullWidth
          id="outlined-name"
          label="Name"
          variant="outlined"
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <RadioButtons
          buttons={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
          label=""
        />
      </Box>
      <Button
        sx={{ marginTop: "2rem", padding: "1rem" }}
        fullWidth
        color="secondary"
        variant="contained"
        type="submit"
      >
        Submit and Start Test
      </Button>
    </Box>
  );
};

const InputDetailsForm = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Grow appear={true} in={true} timeout={1000}>
        <Paper
          elevation={3}
          sx={{
            paddingTop: "8px",
            borderRadius: "2rem",
            background: theme.palette.tertiary.main,
          }}
        >
          <Typography
            variant="h6"
            sx={{ padding: "0.5rem 4rem", color: "#24344d" }}
          >
            Quiz Application
          </Typography>
          <Paper elevation={3} sx={{ padding: "4rem", borderRadius: "1.5rem" }}>
            <InputDetailsFormHeading />
            <InputDetailsFormBody />
          </Paper>
        </Paper>
      </Grow>
    </Box>
  );
};

export default InputDetailsForm;
