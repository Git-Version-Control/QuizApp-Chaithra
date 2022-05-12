import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";

type RadioButtonProps = {
  label: string;
  buttons: Array<{
    value: string;
    label: string;
  }>;
};

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "& span svg": {
    color: theme.palette.primary.main,
  },
}));

const RadioButtons = ({ buttons, label }: RadioButtonProps) => {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
        <RadioGroup
          defaultValue={buttons[0]?.value}
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {buttons.map((button) => (
            <StyledFormControlLabel
              key={button.value}
              value={button.value}
              control={<Radio />}
              label={button.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioButtons;
