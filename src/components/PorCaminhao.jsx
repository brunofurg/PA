import { useState } from 'react';
import NumberInput from "./NumberInput";
import RadioButton from './RadioButton';

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
        
            <div className="flex flex-col border border-gray-300 text-center p-4">
                
                <span className="bg-blue-300 rounded-lg shadow-lg p-1 mb-2">Movimentação de Caminhões:</span>
                <div className="flex flex-row place-content-around">
                    <div className="border border-gray-500 place-content-center rounded-lg p-2 mt-3">
                        <RadioButton> </RadioButton>
                        <NumberInput 
                           labelDescription='Todo o Período:'
                            inputValue={trucksTotal} 
                            onInputChange={handleTrucksTotal}
                            placeHolder='Total de caminhões'
                        />
                    </div>
                    <div className="border border-gray-500 place-content-center rounded-lg p-2 mt-3">
                        <RadioButton> </RadioButton>
                        <NumberInput 
                            labelDescription='Caminhões por Hora:'
                            inputValue={trucksTotal} 
                            onInputChange={handleTrucksTotal}
                            placeHolder='Média por Hora'
                        />
                    </div>
                    
                </div>
                <div className="flex flex-row place-content-around">
                    <div className="border border-gray-500 place-content-center rounded-lg p-2 mt-3">
                         <NumberInput 
                            labelDescription='Peso Médio por Caminhão:'
                            inputValue={mediumWeight} 
                            onInputChange={handleMediumWeight}
                            placeHolder='Padrão 30 toneladas'
                        />
                    </div>
                    <div>
                        25 * 30 = 75
                    </div>
                </div>


            </div>
   
    )
}
