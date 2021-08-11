// import { Button } from '@material-ui/core';
// import { useState } from 'react';

// import TextInput from "./TextInput";
// import DateInput from "./DateInput";
// import DateNow from "./DateNow";
// import RadioButton from './RadioButton';

// export default function Calculadora() {
//   const [typeFaina, setTypeFaina] = useState('');
//   const [dayFaina, setDayFaina] = useState(DateNow);
//   const [weightTotal, setWeightTotal] = useState('');
//   const [shiftWork, setShiftWork] = useState(false);


//   function handleTypeFaina(newTipo) {
//     setTypeFaina(newTipo);
//   }

//   function handleDayFaina(newTipo) {
//     setDayFaina(newTipo);
//   }

//   function handleWeightTotal(newTipo) {
//     setWeightTotal(newTipo);
//   }

//   function handleSetShift(newTipo) {
//     setShiftWork(newTipo);
//   }
  

//   return (
//     <>
//       <strong className="bg-blue-200 justify-around">Simulador de Remuneração</strong>
//       <div className="flex flex-row align-middle justify-evenly my-2">
//         <span className="justify-start">   
//            <DateInput
//               labelDescription='Selecione o dia:' 
//               inputValue={dayFaina} 
//               onInputChange={handleDayFaina}
//            />
//         </span>

//         <span className="justify-end">
//           <div className="bg-purple-100 flex flex-col justify-itens-center align-middle"> 
//              Selecione o período:
//               <RadioButton buttonChecked={!shiftWork} onButtonClick={handleSetShift} name="shiftChoose">A</RadioButton>
//               <RadioButton buttonChecked={!shiftWork} onButtonClick={handleSetShift} name="shiftChoose">B</RadioButton>
//               <RadioButton buttonChecked={!shiftWork} onButtonClick={handleSetShift} name="shiftChoose">C</RadioButton>
//               <RadioButton buttonChecked={!shiftWork} onButtonClick={handleSetShift} name="shiftChoose">D</RadioButton>
//           </div> 
//        </span>
//       </div>


//       <div className="flex flex-row align-middle justify-items-center my-2">
//         <span className="justify-start">   
//           <TextInput
//             labelDescription='Digite o tipo de faina:' 
//             inputValue={typeFaina} 
//             onInputChange={handleTypeFaina}
//             placeHolder='C6 para adubo'
//           />  
//         </span>
//         <span>
//           <TextInput
//             labelDescription='Digite o peso movimentado:' 
//             inputValue={weightTotal} 
//             onInputChange={handleWeightTotal}
//             placeHolder='Somente números'
//           />
//         </span>
//       </div> 


//       <div className="flex flex-row justify-center space-x-10">
//         <span>
//           <Button color="primary" variant="contained" >
//             Calcular
//           </Button>
//         </span>
//         <span>
//           <Button color="secondary" variant="contained" >
//             Inserir
//           </Button>
//         </span>        
//         <span>
//           <Button color="inherit" variant="outlined">
//             Limpar
//           </Button>
//         </span>
//       </div>
//     </>
//   )
// }



import { Button } from '@material-ui/core';
import { Fragment, useState } from 'react';

import TextInput from "./TextInput";
import DateInput from "./DateInput";
import DateNow from "./DateNow";
import RadioButton from './RadioButton';
import TypeChoice from './TypeChoice';
//import ControlledOpenSelect from './ControlledOpenSelect'

export default function Calculadora() {
  const [typeFaina, setTypeFaina] = useState('');
  const [dayFaina, setDayFaina] = useState(DateNow);
  const [shiftWork, setShiftWork] = useState(false);

  function handleTypeFaina(newTipo) {
    setTypeFaina(newTipo);
  }
  function handleDayFaina(newTipo) {
    setDayFaina(newTipo);
  }
  function handleSetShift(newTipo) {
    setShiftWork(newTipo);
  }
  

  return (
    <Fragment>
      <div className="border-2 border-gray-500 flex flex-col align-middle justify-around">
        <strong className="bg-gray-400 text-center align-middle">Simulador de Remuneração</strong>
        <div className="border-2 border-red-300 flex flex-row justify-evenly my-2">
          <span>   
            <DateInput
                labelDescription='Selecione o dia:' 
                inputValue={dayFaina} 
                onInputChange={handleDayFaina}
            />
          </span>
          <span>
            <div className="border-2 border-red-400 flex flex-col items-center align-middle"> 
                <p>Período:</p>
                <RadioButton buttonChecked={!shiftWork} onButtonClick={handleSetShift} name="shiftChoose">A</RadioButton>
                <RadioButton buttonChecked={!shiftWork} onButtonClick={handleSetShift} name="shiftChoose">B</RadioButton>
                <RadioButton buttonChecked={!shiftWork} onButtonClick={handleSetShift} name="shiftChoose">C</RadioButton>
                <RadioButton buttonChecked={!shiftWork} onButtonClick={handleSetShift} name="shiftChoose">D</RadioButton>
            </div> 
          </span>
          <span>   
            <TextInput
              labelDescription='Digite o tipo de faina:' 
              inputValue={typeFaina} 
              onInputChange={handleTypeFaina}
              placeHolder='C6 para adubo'
            />  
          </span>
          {/* <span>
            <ControlledOpenSelect/>
          </span> */}
        </div>


        <div className="flex flex-row align-middle justify-items-center my-2">
          <TypeChoice/>
        </div> 


        <div className="flex flex-row justify-center mb-5 space-x-10">
          <span>
            <Button color="primary" variant="contained" >
              Calcular
            </Button>
          </span>
          <span>
            <Button color="secondary" variant="contained" >
              Inserir
            </Button>
          </span>        
          <span>
            <Button color="inherit" variant="outlined">
              Limpar
            </Button>
          </span>
        </div>
      </div>
    </Fragment>
  )
}