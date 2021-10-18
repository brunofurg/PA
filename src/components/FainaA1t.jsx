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
          <div className="bg-yellow-200 flex flex-col">
                <div className="bg-pink-300 flex flex-row mt-2 justify-around">
                    <div className="bg-blue-300 rounded-lg shadow-lg mb-3 p-2">
                        Insira quantidade de conteineres
                    </div>
                </div>

                <div  className="bg-blue-200 flex flex-row place-content-around space-x-3">
                    <div className="bg-red-400 flex flex-col place-content-center">
                        <span className="flex flex-wrap"><CheckboxInput labelDescription='Contra Mestre'/></span>
                    </div>
                    <div className="text-xs text-center">
                        <div className="bg-blue-100">
                            <NumberInput 
                                labelDescription='Longo Curso CHEIO'
                                inputValue={a1tGlobalCheio}
                                onInputChange={handleA1tGlobalCheio}
                                placeHolder=''
                            />
                        </div>
                        <div className="bg-blue-100">
                            <NumberInput
                                labelDescription='Cabotagem CHEIO'
                                inputValue={a1tCabotagemCheio}
                                onInputChange={handleA1tCabotagemCheio}
                                placeHolder=''
                            />
                        </div>
                        <div className="bg-blue-100">
                            <NumberInput
                                labelDescription='Tranship CHEIO'
                                inputValue={a1tTranshipCheio}
                                onInputChange={handleA1tTranshipCheio}
                                placeHolder=''
                            />
                        </div>
                    </div>
                    <div className="text-xs text-center align-middle">
                        <div className="bg-blue-100">
                            <NumberInput
                                labelDescription='Longo Curso VAZIO'
                                inputValue={a1tGlobalVazio}
                                onInputChange={handleA1tGlobalVazio}
                                placeHolder=''
                            />
                        </div>
                        <div className="bg-blue-100">
                            <NumberInput
                                labelDescription='Cabotagem VAZIO'
                                inputValue={a1tCabotagemVazio}
                                onInputChange={handleA1tCabotagemVazio}
                                placeHolder=''
                            />
                        </div>
                        <div className="bg-blue-100">
                            <NumberInput
                                labelDescription='Tranship VAZIO'
                                inputValue={a1tTranshipVazio}
                                onInputChange={handleA1tTranshipVazio}
                                placeHolder=''
                            />
                        </div>
                    </div>
                </div>
           
          
         </div>  
        </>
    )
}


