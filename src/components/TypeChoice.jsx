//import { Button } from '@material-ui/core';
import { useState } from 'react';

import TextInput from "./TextInput";

export default function TypeChoice() {
  const [weightTotal, setWeightTotal] = useState('');

  function handleWeightTotal(newTipo) {
    setWeightTotal(newTipo);
  }
  return (
         <>
           <span>
                <TextInput
                  labelDescription='Digite o peso movimentado:' 
                  inputValue={weightTotal} 
                  onInputChange={handleWeightTotal}
                  placeHolder='Somente números'
                />
              </span>  
            </>
    )
}
