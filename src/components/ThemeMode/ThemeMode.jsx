import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useTheme from "../../hooks/useTheme";

const ThemeMode = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
      <span>Choose theme mode</span>
      <FormControl sx={{ my: 1, minWidth: 200 }}>
        <InputLabel id="theme-label">Theme</InputLabel>
        <Select
          labelId="theme-label"
          id="theme"
          value={theme}
          defaultValue="light"
          label="Age"
          onChange={toggleTheme}
        >
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default ThemeMode;
