import { useState } from 'react';
import NumberInput from "./NumberInput";
import RadioButton from './RadioButton';

export default function FainaPorCaminhao() {
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
                
                <span className="bg-blue-300 rounded-lg shadow-lg p-1 mb-2">Calcular Caminhões:</span>
                <div className="flex flex-row place-content-around text-xs">
                    <div className="border border-gray-400 hover:bg-gray-200 place-content-center rounded-lg p-2">
                        <RadioButton labelDescription=""/>
                        <NumberInput 
                           labelDescription='Pelo Período'
                            inputValue={trucksTotal} 
                            onInputChange={handleTrucksTotal}
                            placeHolder='Total movimentado'
                        />
                    </div>
                    <div className="border border-gray-400 hover:bg-gray-200  place-content-center rounded-lg p-2">
                        <RadioButton labelDescription=""/> 
                        <NumberInput 
                            labelDescription='Por Hora'
                            inputValue={trucksTotal} 
                            onInputChange={handleTrucksTotal}
                            placeHolder='Média Caminhões/Hora'
                        />
                    </div>
                    
                </div>
                <div className="flex flex-row flex place-content-around">
                    <div className="place-self-center">
                         <NumberInput 
                            labelDescription='Peso Médio por Caminhão'
                            inputValue={mediumWeight} 
                            onInputChange={handleMediumWeight}
                            placeHolder='Padrão 30 toneladas'
                        />
                    </div>
                    <div className="flex flex-col p-2">
                        <span>
                            25 caminhões
                        </span>
                        <span>
                            x
                        </span>
                        <span>
                            30 ton|und
                        </span>
                        <span>
                            =750 ton|und
                        </span>
                    </div>
                </div>


            </div>
   
    )
}
