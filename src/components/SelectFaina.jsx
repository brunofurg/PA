import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectFaina() {
  const [faina, setFaina] = React.useState('');

  const handleChange = (event) => {
    //console.log(faina);
    setFaina(event.target.value);
    console.log(event.target.value);
    //return event.target.value;

  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel>Faina</InputLabel>
        <Select
          value={faina}
          onChange={handleChange}
          label="Faina"
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value={"a1t"}>A1T-Tecon</MenuItem>
          <MenuItem value={"b3"}>B3-Celulose</MenuItem>
          <MenuItem value={"b13"}>B13-Toras</MenuItem>
          <MenuItem value={"b90"}>B90-Conexo</MenuItem>          
          <MenuItem value={"c3"}>C3-Agrícola</MenuItem>
          <MenuItem value={"c6"}>C6-Adubo</MenuItem>
          <MenuItem value={"c7"}>C7-Cavaco</MenuItem>
          <MenuItem value={"a1"}>A1</MenuItem>
          <MenuItem value={"a2"}>A2</MenuItem>
          <MenuItem value={"b1"}>B1</MenuItem>          
          <MenuItem value={"b2"}>B2</MenuItem>
          <MenuItem value={"b4"}>B4</MenuItem>
          <MenuItem value={"b5"}>B5</MenuItem>
          <MenuItem value={"a6"}>B6</MenuItem>
          <MenuItem value={"b7"}>B7</MenuItem>          
          <MenuItem value={"b8"}>B8</MenuItem>
          <MenuItem value={"b9"}>B9</MenuItem>
          <MenuItem value={"b10"}>B10</MenuItem>
          <MenuItem value={"b11"}>B11</MenuItem>
          <MenuItem value={"b12"}>B11</MenuItem>
          <MenuItem value={"b14"}>B11</MenuItem>
          <MenuItem value={"b11"}>B11</MenuItem>
          <MenuItem value={"c1"}>C1</MenuItem>          
          <MenuItem value={"c2"}>C2</MenuItem>
          <MenuItem value={"c4"}>C4</MenuItem>  
          <MenuItem value={"c5"}>C5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

 