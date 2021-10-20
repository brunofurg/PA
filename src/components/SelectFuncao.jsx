import * as React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectFuncao() {
  const [faina, setFaina] = React.useState("");

  const handleChange = (event) => {
    setFaina(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel>Função</InputLabel>
        <Select value={faina} onChange={handleChange} label="Função">
          <MenuItem value=""></MenuItem>
          <MenuItem value={"101"}>CONTRAMESTRE GERAL</MenuItem>
          <MenuItem value={"150"}>CONTRAMESTRE GERAL (B)</MenuItem>
          <MenuItem value={"101"}>CONTRAMESTRE GERAL TECON</MenuItem>
          <MenuItem value={"101"}>CONTRAMESTRE GERAL GRANÉIS</MenuItem>
          <MenuItem value={"107"}>SUPERVISOR AUTOMÓVEL</MenuItem>
          <MenuItem value={"108"}>SUPERVISOR AUTOMÓVEL (B)</MenuItem>
          <MenuItem value={"109"}>SUPERVISOR RORO</MenuItem>
          <MenuItem value={"110"}>SUPERVISOR RORO (B)</MenuItem>
          <MenuItem value={"176"}>ALUNO DE GUINCHO GRAB/TORAS</MenuItem>
          <MenuItem value={"177"}>ALUNO OPE ESCAV HIDRÁULICA GARRA</MenuItem>
          <MenuItem value={"175"}>ESTIVADOR APOIO TORAS TEMPORÁRIO</MenuItem>
          <MenuItem value={"172"}>TRAINEE PONTE CELULOSE PAPEL</MenuItem>
          <MenuItem value={"171"}>PONTE ROLANTE CELULOSE PAPEL</MenuItem>
          <MenuItem value={"172"}>TRAINEE CELULOSE PAPEL</MenuItem>
          <MenuItem value={"146"}>OPERADOR CELULOSE PAPEL</MenuItem>
          <MenuItem value={"147"}>SUPERV OPERADOR CELULOSE PAPEL</MenuItem>
          <MenuItem value={"111"}>OPERADOR DE PONTE ROLANTE</MenuItem>
          <MenuItem value={"112"}>GUINCHEIRO</MenuItem>
          <MenuItem value={"113"}>GUINCHEIRO (B)</MenuItem>
          <MenuItem value={"149"}>GUINCHEIRO ESTÁGIO SUPERV</MenuItem>
          <MenuItem value={"120"}>OPERADOR DE TROJÃO</MenuItem>
          <MenuItem value={"123"}>OPERADOR DE TROJÃO (B)</MenuItem>
          <MenuItem value={"124"}>OPERADOR DE RETRO ESCAVADEIRA</MenuItem>
          <MenuItem value={"118"}>OPERADOR EMPILHAD PEQ PORTE</MenuItem>
          <MenuItem value={"119"}>OPERADOR EMPILHAD GRD PORTE</MenuItem>
          <MenuItem value={"128"}>OPERADOR DE MAFI</MenuItem>
          <MenuItem value={"136"}>OPERADOR ESCAV HIDRÁULICA</MenuItem>
          <MenuItem value={"143"}>OPERADOR ESCAV HIDRÁULICA GARRA</MenuItem>
          <MenuItem value={"127"}>OPERADOR DE BOBCAT</MenuItem>
          <MenuItem value={"121"}>SINALEIRO GRANÉIS TERMINAL</MenuItem>
          <MenuItem value={"122"}>SINALEIRO PRODUÇÃO</MenuItem>
          <MenuItem value={"140"}>SINALEIRO SEM PRODUÇÃO</MenuItem>
          <MenuItem value={"138"}>SINALEIRO AREIA</MenuItem>
          <MenuItem value={"173"}>SINALEIRO PRODUTOS AGRÍCOLAS</MenuItem>
          <MenuItem value={"144"}>SINALEIRO CARGA FRIGORÍFICA</MenuItem>
          <MenuItem value={"114"}>MOTORISTA DE AUTOMÓVEL</MenuItem>
          <MenuItem value={"115"}>MOTORISTA DE AUTOMÓVEL (B)</MenuItem>
          <MenuItem value={"116"}>MOTORISTA RORO</MenuItem>
          <MenuItem value={"117"}>MOTORISTA RORO (B)</MenuItem>
          <MenuItem value={"102"}>CONTRAMESTRE PRODUÇÃO</MenuItem>
          <MenuItem value={"105"}>CONTRAMESTRE AREIA</MenuItem>
          <MenuItem value={"103"}>CONTRAMESTRE SEM PRODUÇÃO</MenuItem>
          <MenuItem value={"106"}>CONTRAMESTRE CONEXO</MenuItem>
          <MenuItem value={"104"}>CONTRAMESTRE FRIFORÍFICO</MenuItem>
          <MenuItem value={"130"}>ESCALA DE GRANÉIS TERMINAL </MenuItem>
          <MenuItem value={"129"}>ESCALA DE PRODUÇÃO</MenuItem>
          <MenuItem value={"131"}>ESCALA DE SEM PRODUÇÃO</MenuItem>
          <MenuItem value={"133"}>ESCALA DE AREIA</MenuItem>
          <MenuItem value={"134"}>ESCALA DE PRODUTOS AGRÍCOLAS</MenuItem>
          <MenuItem value={"132"}>ESCALA DE CARGA FRIGORÍFICA</MenuItem>
          <MenuItem value={"126"}>ESCALA DE CONEXO CAIS</MenuItem>
          <MenuItem value={"127"}>ESCALA DE CONEXO TECON</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
