import * as React from 'react';

import { getNewId } from '../services/idService';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectIntervalo({
  id = getNewId(),
}) {
  const [intervalo, setIntervalo] = React.useState('');

  const handleChange = (event) => {
    //console.log(faina);
    setIntervalo(event.target.value);
    console.log(event.target.value);
    //return event.target.value;

  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id={id}>Intervalo:</InputLabel>
        <Select
          id={id}
          value={intervalo}
          onChange={handleChange}
          label="Faina"
        >
          <MenuItem value={"1a"}>Anual</MenuItem>
          <MenuItem value={"6m"}>Semestre</MenuItem>
          <MenuItem value={"4m"}>Qadrimestre</MenuItem>          
          <MenuItem value={"3m"}>Trimestre</MenuItem>
          <MenuItem value={""}></MenuItem>
          <MenuItem value={"07-21"}>07-21</MenuItem>
          <MenuItem value={"08-21"}>08-21</MenuItem>
          <MenuItem value={"09-21"}>09-21</MenuItem>          
          <MenuItem value={"10-21"}>10-21</MenuItem>
          </Select>
      </FormControl>
    </div>
  );
}

 