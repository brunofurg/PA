import NumberInput from "./NumberInput";
import { useState } from 'react';
export default function PesoMovimentado() {
    //const [weightTotal, setWeightTotal] = useState(flashCard?.inputValues?._pesoMovimentado || '');
    const [weightTotal, setWeightTotal] = useState('');
    function handleWeightTotal(newTipo) {
        setWeightTotal(newTipo);
      }
    return (
        <div className="flex flex-col justify-center p-4">
            <span className="bg-blue-300 content-center text-center shadow-lg rounded-lg p-2 mb-4">Peso Movimentado no Período</span>
            <span className="">
                 <NumberInput
                    labelDescription='' 
                    inputValue={weightTotal} 
                    onInputChange={handleWeightTotal}
                    placeHolder='Peso total'
                />
            </span>
                

        </div>
    )
}
