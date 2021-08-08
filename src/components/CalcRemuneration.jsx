import { Button } from '@material-ui/core';
import { useState } from 'react';

import TextInput from "./TextInput";

export default function CalcRemuneration() {
  const [tipoFaina, setTipoFaina] = useState('');

  function handleTipoFaina(newTipo) {
    setTipoFaina(newTipo);
  }




  return (
    <>
      <div>
        Calculadora Simulador de Remuneração
      </div>


      <div className="flex flex-col my-4">
        <TextInput
          labelDescription='Digite o tipo de faina:' 
          inputValue={tipoFaina} 
          onInputChange={handleTipoFaina}
          placeHolder='C6 para adubo'
        />
      </div> 


      <div className="flex justify-center">
        <span>
          <Button color="primary" variant="contained" >
            Inserir
          </Button>
        </span>
        <span>
          <Button color="inherit" variant="contained">
            Limpar
          </Button>
        </span>
      </div>
    </>
  )
}
