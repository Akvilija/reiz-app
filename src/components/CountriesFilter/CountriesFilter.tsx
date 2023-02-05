import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

type CountriesFilterProps = {
  onChange: (value: string) => void;
};

const CountriesFilter = ({ onChange }: CountriesFilterProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl sx={{ margin: "10px 0 20px 0px" }} fullWidth>
      <InputLabel id="demo-simple-select-label">Filter countries</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Filter Countries"
        onChange={handleChange}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="Oceania">Countries in Oceania region</MenuItem>
        <MenuItem value="Smaller than Lithuania">
          Countries smaller than Lithuania
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default CountriesFilter;
