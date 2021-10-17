import { useState } from 'react';
import CheckboxInput from './CheckboxInput';
import NumberInput from "./NumberInput";

export default function FainaCotas() {
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
                <div className="bg-blue-200 text-center p-2 m-1 mb-2">
                    <p>Insira Quantidade e Tipo de Cotas</p>
                </div>

                <div  className="flex flex-row justify-around ">
                <div className="text-xs text-center">
                <div className="bg-blue-100 flex flex-row place-items-center space-x-2 p-2 m-1">
                    <CheckboxInput labelDescription=''/>
                    <NumberInput 
                        labelDescription='Diária(x1.0)'
                        inputValue={a1tGlobalCheio}
                        onInputChange={handleA1tGlobalCheio}
                        placeHolder=''
                    />
                </div>
                <div className="bg-blue-100 flex flex-row place-items-center space-x-2 p-2 m-1">
                    <CheckboxInput labelDescription=''/>
                    <NumberInput
                        labelDescription='Motorista(x1.2)'
                        inputValue={a1tCabotagemCheio}
                        onInputChange={handleA1tCabotagemCheio}
                        placeHolder=''
                    />
                </div>
                <div className="bg-blue-100 flex flex-row place-items-center space-x-2 p-2 m-1">
                    <CheckboxInput labelDescription=''/>
                    <NumberInput
                        labelDescription='Operador(x2.0)'
                        inputValue={a1tTranshipCheio}
                        onInputChange={handleA1tTranshipCheio}
                        placeHolder=''
                    />
                </div>
            </div>
            <div className="text-xs text-center align-middle">
            <div className="bg-blue-100 flex flex-row place-items-center space-x-2 p-2 m-1">
                    <CheckboxInput labelDescription=''/> 
                    <NumberInput
                        labelDescription='Produção(x1.0)'
                        inputValue={a1tGlobalVazio}
                        onInputChange={handleA1tGlobalVazio}
                        placeHolder=''
                    />
                </div>
                <div className="bg-blue-100 flex flex-row place-items-center space-x-2 p-2 m-1">
                    <CheckboxInput labelDescription=''/>
                    <NumberInput
                        labelDescription='Contra-Mestre(x1.5)'
                        inputValue={a1tCabotagemVazio}
                        onInputChange={handleA1tCabotagemVazio}
                        placeHolder=''
                    />
                </div>
                <div className="bg-blue-100 flex flex-row place-items-center space-x-2 p-2 m-1">
                    <CheckboxInput labelDescription=''/>
                    <NumberInput
                        labelDescription='Capataz(x2.25)'
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











// export default function FainaCotas() {
//     return (
//         <div className="bg-red-300 flex flex-col">
//             /Soldado(x1)
//             Motorista(x1,2)
//             /Contra-Mestre(x1,5)
//             Operador(x2)
//             /Capataz(x2,25)



//         </div>
//     )
// }



