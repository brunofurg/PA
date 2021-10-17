import { useState } from 'react';
import NumberInput from "./NumberInput";

export default function PorCaminhao() {
    const [trucksTotal, setTrucksTotal] = useState('');
    const [mediumWeight, setMediumWeight] = useState('');
    function handleTrucksTotal(totalTrucks) {
        setTrucksTotal(totalTrucks);
      }
      function handleMediumWeight(mediumWight) {
        setMediumWeight(mediumWight);
      }
    return (
        <>
            <div className="flex flex-col place-items-center p-4">
                <span>
                    <NumberInput 
                        labelDescription='Total de Caminhões movimentado no período:'
                        inputValue={trucksTotal} 
                        onInputChange={handleTrucksTotal}
                        placeHolder='Número de caminhões'
                    />
                </span>
                <span>
                    <NumberInput 
                        labelDescription='Peso Médio por Caminhão:'
                        inputValue={mediumWeight} 
                        onInputChange={handleMediumWeight}
                        placeHolder='Padrão 30 toneladas'
                    />
                </span>

            </div>
        </>
    )
}
