import { useState } from 'react';
import CheckboxInput from './CheckboxInput';
import NumberInput from "./NumberInput";

export default function FainaA1t() {
    const [a1tGlobalCheio, setA1tGlobalCheio] = useState('');
    const [a1tGlobalVazio, setA1tGlobalVazio] = useState('');
    const [a1tCabotagemCheio, setA1tCabotagemCheio] = useState('');
    const [a1tCabotagemVazio, setA1tCabotagemVazio] = useState('');
    const [a1tTranshipCheio, setA1tTranshipCheio] = useState('');
    const [a1tTranshipVazio, setA1tTranshipVazio] = useState('');
    
    function handleA1tGlobalCheio(quantity) {
        console.log(a1tGlobalCheio);
        setA1tGlobalCheio(quantity);

      }
      function handleA1tGlobalVazio(quantity) {
        setA1tGlobalVazio(quantity);
      }
      function handleA1tCabotagemCheio(quantity) {
        setA1tCabotagemCheio(quantity);
      }    
      function handleA1tCabotagemVazio(quantity) {
        setA1tCabotagemVazio(quantity);

      }   
      function handleA1tTranshipCheio(quantity) {
        setA1tTranshipCheio(quantity);
      }   

      function handleA1tTranshipVazio(quantity) {
        setA1tTranshipVazio(quantity);
      }   

    return (
        <>
          <div className="flex flex-col mt-2 p-2">
                <div className="justify-center flex flex-row">
                    <div className="bg-blue-300 rounded-lg shadow-lg mb-3 p-3">
                        Insira Quantidade de Contêineres
                    </div>
                </div>

                <div  className="flex flex-row place-content-around text-xs text-center space-x-3">
                    <div className="flex flex-col items-center place-content-center p-1">
                        <span>Contra Mestre (x1.25)</span>
                        <span><CheckboxInput labelDescription=''/></span>
                    </div>

                    <div className="flex flex-col justify-evenly space-y-1 p-2">
                            <NumberInput 
                                labelDescription='Longo Curso CHEIO'
                                inputValue={a1tGlobalCheio}
                                onInputChange={handleA1tGlobalCheio}
                                placeHolder=''
                            />
                            <NumberInput
                                labelDescription='Cabotagem CHEIO'
                                inputValue={a1tCabotagemCheio}
                                onInputChange={handleA1tCabotagemCheio}
                                placeHolder=''
                            />
                            <NumberInput
                                labelDescription='Tranship CHEIO'
                                inputValue={a1tTranshipCheio}
                                onInputChange={handleA1tTranshipCheio}
                                placeHolder=''
                            />
                    </div>
                    <div className="flex flex-col justify-evenly space-y-1 p-2">
                            <NumberInput
                                labelDescription='Longo Curso VAZIO'
                                inputValue={a1tGlobalVazio}
                                onInputChange={handleA1tGlobalVazio}
                                placeHolder=''
                            />
                            <NumberInput
                                labelDescription='Cabotagem VAZIO'
                                inputValue={a1tCabotagemVazio}
                                onInputChange={handleA1tCabotagemVazio}
                                placeHolder=''
                            />
                            <NumberInput
                                labelDescription='Tranship VAZIO'
                                inputValue={a1tTranshipVazio}
                                onInputChange={handleA1tTranshipVazio}
                                placeHolder=''
                            />
                    </div>
                </div>
           
          
         </div>  
        </>
    )
}


