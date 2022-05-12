import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

type CheckboxOptionsProps = {
  options: any;
  handleChange: any;
};

const CheckboxOptions = ({ options, handleChange }: CheckboxOptionsProps) => {
  return (
    <FormGroup>
      {options.map((option: any) => (
        <FormControlLabel
          key={option.option}
          name={option.option}
          onChange={handleChange}
          control={<Checkbox checked={option.value || false} />}
          label={option.option}
        />
      ))}
    </FormGroup>
  );
};

export default CheckboxOptions;
