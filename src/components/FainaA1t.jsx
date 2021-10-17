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
          <div className="flex flex-col">
                <div className="flex flex-row mt-2 justify-around">
                    <div className="bg-blue-200 p-2">
                        Insira quantidade de conteineres
                    </div>
                    <span className="">
                        <CheckboxInput
                            labelDescription='Contra-Mestre'
                        />
                    </span>
                </div>

                <div  className="flex flex-row place-content-around space-x-3">
                <div className="text-xs text-center">
               <div className="bg-blue-100">
                    <NumberInput 
                        labelDescription='Longo Curso Cheio'
                        inputValue={a1tGlobalCheio}
                        onInputChange={handleA1tGlobalCheio}
                        placeHolder=''
                    />
                </div>
                <div className="bg-blue-100">
                    <NumberInput
                        labelDescription='Cabotagem Cheio'
                        inputValue={a1tCabotagemCheio}
                        onInputChange={handleA1tCabotagemCheio}
                        placeHolder=''
                    />
                </div>
                <div className="bg-blue-100">
                    <NumberInput
                        labelDescription='Tranship Cheio'
                        inputValue={a1tTranshipCheio}
                        onInputChange={handleA1tTranshipCheio}
                        placeHolder=''
                    />
                </div>
            </div>
            <div className="text-xs text-center align-middle">
               <div className="bg-blue-100">
                    <NumberInput
                        labelDescription='Longo Curso Vazio'
                        inputValue={a1tGlobalVazio}
                        onInputChange={handleA1tGlobalVazio}
                        placeHolder=''
                    />
                </div>
                <div className="bg-blue-100">
                    <NumberInput
                        labelDescription='Cabotagem Vazio'
                        inputValue={a1tCabotagemVazio}
                        onInputChange={handleA1tCabotagemVazio}
                        placeHolder=''
                    />
                </div>
                <div className="bg-blue-100">
                    <NumberInput
                        labelDescription='Tranship Vazio'
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


