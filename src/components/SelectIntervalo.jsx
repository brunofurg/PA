import * as React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { getNewId } from "../services/idService";

export default function SelectIntervalo({ id = getNewId() }) {
  const [intervalo, setIntervalo] = React.useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setIntervalo(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel>Período:</InputLabel>
        <Select
          id={id}
          value={intervalo}
          onChange={handleChange}
          label="Período"
        >
          <MenuItem value={"10-21"}>10-21</MenuItem>
          <MenuItem value={"09-21"}>09-21</MenuItem>
          <MenuItem value={"08-21"}>08-21</MenuItem>
          <MenuItem value={"07-21"}>07-21</MenuItem>
          <MenuItem value={""}></MenuItem>
          <MenuItem value={"3m"}>Trimestre</MenuItem>
          <MenuItem value={"4m"}>Quadrimestre</MenuItem>
          <MenuItem value={"6m"}>Semestre</MenuItem>
          <MenuItem value={"1a"}>Ano</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
