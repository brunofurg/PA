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
          <div className="flex flex-col p-2">
                <div className="bg-pink-300 justify-center flex flex-row">
                    <div className="bg-blue-300 rounded-lg shadow-lg mb-3 p-3">
                        Insira Quantidade de Contêineres
                    </div>
                </div>

                <div  className="bg-blue-200 flex flex-row place-content-around space-x-3">
                    <div className="bg-red-400 flex flex-col place-content-center">
                        <span className="flex flex-wrap"><CheckboxInput labelDescription='Contra Mestre'/></span>
                    </div>
                    <div className="flex flex-col text-center">
                        <span>
                            Longo Curso
                        </span>
                        <span>
                            Cabotagem
                        </span>
                        <span>
                            Tranship
                        </span>
                    </div>
                    <div className="bg-purple-300 flex flex-col justify-evenly p-2">
 
                        <div className="bg-blue-100 ṕlace-items-center">
                            <NumberInput 
                                labelDescription=''
                                inputValue={a1tGlobalCheio}
                                onInputChange={handleA1tGlobalCheio}
                                placeHolder=''
                            />
                        </div>
                        <div className="bg-blue-100 ṕlace-items-center">
                            <NumberInput
                                labelDescription=''
                                inputValue={a1tCabotagemCheio}
                                onInputChange={handleA1tCabotagemCheio}
                                placeHolder=''
                            />
                        </div>
                        <div className="bg-blue-100 ṕlace-items-center">
                            <NumberInput
                                labelDescription=''
                                inputValue={a1tTranshipCheio}
                                onInputChange={handleA1tTranshipCheio}
                                placeHolder=''
                            />
                        </div>
                    </div>
                    <div className="text-xs text-center align-middle">
                        <div className="bg-blue-100 ṕlace-items-center">
                            <NumberInput
                                labelDescription=''
                                inputValue={a1tGlobalVazio}
                                onInputChange={handleA1tGlobalVazio}
                                placeHolder=''
                            />
                        </div>
                        <div className="bg-blue-100 ṕlace-items-center">
                            <NumberInput
                                labelDescription=''
                                inputValue={a1tCabotagemVazio}
                                onInputChange={handleA1tCabotagemVazio}
                                placeHolder=''
                            />
                        </div>
                        <div className="bg-blue-100 ṕlace-items-center">
                            <NumberInput
                                labelDescription=''
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


