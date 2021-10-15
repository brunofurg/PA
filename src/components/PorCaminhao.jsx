import { useState } from 'react';
import TextInput from "./TextInput";

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
            <div className="flex flex-col p-2">
                <div>
                    <TextInput 
                        labelDescription='Total de Caminhões movimentado no período:'
                        inputValue={trucksTotal} 
                        onInputChange={handleTrucksTotal}
                        placeHolder='Número de caminhões'
                    />
                </div>
                <div>
                <TextInput 
                        labelDescription='Peso Médio por Caminhão:'
                        inputValue={mediumWeight} 
                        onInputChange={handleMediumWeight}
                        placeHolder='Padrão 30 toneladas'
                    />
                </div>

            </div>
        </>
    )
}
