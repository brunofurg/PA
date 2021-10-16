import { useState } from 'react';
import CheckboxInput from './CheckboxInput';
import TextInput from "./TextInput";

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
                <div className="flex flex-row mt-2 place-content-around">
                    <span className="align-bottom">
                        A1T Tecon
                    </span>
                <span>
                        <CheckboxInput
                            labelDescription='Contra-Mestre'
                        />
                    </span>
                </div>

                <div  className="flex flex-row place-content-around space-x-3">
                <div className="text-xs text-center">
               <div className="bg-gray-300">
                    <TextInput 
                        labelDescription='Longo Curso Cheio'
                        inputValue={a1tGlobalCheio}
                        onInputChange={handleA1tGlobalCheio}
                        placeHolder=''
                    />
                </div>
                <div className="bg-gray-300">
                    <TextInput 
                        labelDescription='Cabotagem Cheio'
                        inputValue={a1tCabotagemCheio}
                        onInputChange={handleA1tCabotagemCheio}
                        placeHolder=''
                    />
                </div>
                <div className="bg-gray-300">
                    <TextInput 
                        labelDescription='Tranship Cheio'
                        inputValue={a1tTranshipCheio}
                        onInputChange={handleA1tTranshipCheio}
                        placeHolder=''
                    />
                </div>
            </div>
            <div className="text-xs text-center align-middle">
               <div className="bg-gray-300">
                    <TextInput 
                        labelDescription='Longo Curso Vazio'
                        inputValue={a1tGlobalVazio}
                        onInputChange={handleA1tGlobalVazio}
                        placeHolder=''
                    />
                </div>
                <div className="bg-gray-300">
                    <TextInput 
                        labelDescription='Cabotagem Vazio'
                        inputValue={a1tCabotagemVazio}
                        onInputChange={handleA1tCabotagemVazio}
                        placeHolder=''
                    />
                </div>
                <div className="bg-gray-300">
                    <TextInput 
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


