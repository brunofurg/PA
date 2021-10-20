import * as React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectFaina() {
  const [faina, setFaina] = React.useState("");

  const handleChange = (event) => {
    setFaina(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel>Faina</InputLabel>
        <Select value={faina} onChange={handleChange} label="Faina">
          <MenuItem value=""></MenuItem>
          <MenuItem value={"a1t"}>A1T-Tecon</MenuItem>
          <MenuItem value={"b3"}>B3-Celulose</MenuItem>
          <MenuItem value={"b13"}>B13-Tora Longa Automático</MenuItem>
          <MenuItem value={"b90"}>B90-Conexo</MenuItem>
          <MenuItem value={"c3"}>C3-Agrícola Automático</MenuItem>
          <MenuItem value={"c6"}>C6-Adubo Automático</MenuItem>
          <MenuItem value={"c7"}>C7-Cavaco Madeira</MenuItem>
          <MenuItem value={"a1"}>A1-Contêineres Automático</MenuItem>
          <MenuItem value={"a2"}>A2-Contêineres Manual</MenuItem>
          <MenuItem value={"b1"}>B1-Cargas Avulsas</MenuItem>
          <MenuItem value={"b2"}>B2-Cargas Unitizadas</MenuItem>
          <MenuItem value={"b4"}>B4-Toras Cintadas/Bobinas</MenuItem>
          <MenuItem value={"b5"}>{`B5-Volumes Indivisíveis >1ton`}</MenuItem>
          <MenuItem value={"a6"}>B6-Cargas Avulsas Rampa</MenuItem>
          <MenuItem value={"b7"}>B7-Cargas Unitizadas Rampa</MenuItem>
          <MenuItem value={"b8"}>B8-Veículos em Geral</MenuItem>
          <MenuItem value={"b9"}>B9-Veículos Passeio/Utilitários</MenuItem>
          <MenuItem value={"b10"}>B10-Cargas Frigoríficas</MenuItem>
          <MenuItem value={"b11"}>B11-Cargas Vivas</MenuItem>
          <MenuItem value={"b12"}>B12-Tora Longa Manual</MenuItem>
          <MenuItem value={"b14"}>B14-Estaleiro Break Bulk</MenuItem>
          <MenuItem value={"b15"}>B15-Estaleiro Projetos</MenuItem>
          <MenuItem value={"c1"}>C1-Agrícola Manual</MenuItem>
          <MenuItem value={"c2"}>C2-Agrícola Mecânico</MenuItem>
          <MenuItem value={"c4"}>C4-Adubo Manual</MenuItem>
          <MenuItem value={"c5"}>C5-Adubo Semi Automático</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
