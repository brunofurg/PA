import NumberInput from "./NumberInput";
import { useState } from 'react';
export default function PesoMovimentado() {
    //const [weightTotal, setWeightTotal] = useState(flashCard?.inputValues?._pesoMovimentado || '');
    const [weightTotal, setWeightTotal] = useState('');
    function handleWeightTotal(newTipo) {
        setWeightTotal(newTipo);
      }
    return (
        <div className="p-4">
            <span>
                <NumberInput
                    labelDescription='Digite o peso movimentado no período:' 
                    inputValue={weightTotal} 
                    onInputChange={handleWeightTotal}
                    placeHolder='Peso total'
                />
            </span>
        </div>
    )
}
