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
        
            <div className="flex flex-col text-center p-4">
                
                <span className="bg-blue-300 p-1">Movimentação de Caminhões:</span>
                <div className="flex flex-row place-content-around">
                    <div className="items-center p-2 mt-3">
                        <RadioButton> </RadioButton>
                        <NumberInput 
                           labelDescription='Todo o período:'
                            inputValue={trucksTotal} 
                            onInputChange={handleTrucksTotal}
                            placeHolder='Número de caminhões'
                        />
                    </div>
                    <div className="items-center p-2 mt-3">
                        <RadioButton> </RadioButton>
                        <NumberInput 
                            labelDescription='Caminhões por Hora:'
                            inputValue={trucksTotal} 
                            onInputChange={handleTrucksTotal}
                            placeHolder='Número de caminhões'
                        />
                    </div>
                    
                </div>
                <div className="flex justify-center text-center p-2">
                    <NumberInput 
                        labelDescription='Peso Médio por Caminhão:'
                        inputValue={mediumWeight} 
                        onInputChange={handleMediumWeight}
                        placeHolder='Padrão 30 toneladas'
                    />
                </div>



            </div>
   
    )
}
