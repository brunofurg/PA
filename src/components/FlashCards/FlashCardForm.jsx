import TextInput from '../TextInput';
//import TextArea from '../TextArea';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Error from '../Error';

import { BsPlusCircle as IconPlus } from 'react-icons/bs';

import DateInput from "../DateInput";
import RadioButton from '../RadioButton';
import FainaA1t from '../FainaA1t';
import PorCaminhao from '../PorCaminhao';
import SelectFaina from "../SelectFaina";

export default function FlashCardForm({
  createMode = true,
  onPersist = null,
  onButtonClick = null,
  children: flashCard = null,
}) {
  const [title, setTitle] = useState(flashCard?.title || '');
  const [description, setDescription] = useState(flashCard?.description || '');
  
  const [dayWork, setDayWork] = useState(flashCard?.infoWork.dia || '');
  const [shiftWork, setShiftWork] = useState(flashCard?.infoWork.turno || '');
  const [typeFaina, setTypeFaina] = useState(flashCard?.inputValues._tipo || '');
  const [weightTotal, setWeightTotal] = useState(flashCard?.inputValues._pesoMovimentado || '');
  
  
  const [error, setError] = useState('');


  //const [typeFaina, setTypeFaina] = useState('');
  //const [dayFaina, setDayFaina] = useState('');
  //const [shiftWork, setShiftWork] = useState(false);


  useEffect(() => {
    if (createMode) {
      setTitle('');
      setDescription('');
    }
  }, [createMode]);

  function handleTitleChange(newTitle) {
    setTitle(newTitle);
  }

  function handleDescriptionChange(newDescription) {
    setDescription(newDescription);
  }

  function clearFields() {
    setTitle('');
    setDescription('');
  }

  function validateForm() {
    return title.trim() !== '' && description.trim() !== '';
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      setError('');

      if (onPersist) {
        onPersist(title, description);
        clearFields();
      }
    } else {
      setError('Título e Descrição são obrigatórios.');
    }
  }

  function handleFormReset() {
    clearFields();
  }





  function handleTypeFaina(newTipo) {
    setTypeFaina(newTipo);
  }
  function handleDayWork(newTipo) {
    setDayWork(newTipo);
  }
  function handleSetShift(newTipo) {
    setShiftWork(newTipo);
  }

  function handleWeightTotal(newTipo) {
    setWeightTotal(newTipo);
  }

  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }


  const backgroundClassName = createMode ? 'bg-gray-200' : 'bg-yellow-100';




  return (
    <form
      className={`${backgroundClassName} p-2`}
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      // onButtonClick={handleButtonClick}
    >
      <div className="">
        <div className="flex flex-row items-center justify-evenly">
          <p className="text-center font-semibold mb-2">Calculadora de Remuneração</p>
          <div>
             <Button onButtonClick={handleButtonClick}>Novo Trabalho</Button>
          </div>
        </div>
      
      <div className="border-2 border-yellow-300">
        <div className="p-2">
          <TextInput
            labelDescription="Navio:"
            inputValue={title}
            onInputChange={handleTitleChange}
          />
          <TextInput
            labelDescription="Observações:"
            inputValue={description}
            onTextAreaChange={handleDescriptionChange}
          />
        </div>
        <div className="flex flex-row justify-evenly items-center">
          <span>
            <div className="flex flex-col"> 
                <p>Período:</p>
                <RadioButton buttonChecked={shiftWork} onButtonClick={handleSetShift} name="shiftChoose">A</RadioButton>
                <RadioButton buttonChecked={shiftWork} onButtonClick={handleSetShift} name="shiftChoose">B</RadioButton>
                <RadioButton buttonChecked={shiftWork} onButtonClick={handleSetShift} name="shiftChoose">C</RadioButton>
                <RadioButton buttonChecked={shiftWork} onButtonClick={handleSetShift} name="shiftChoose">D</RadioButton>
            </div> 
          </span>
        <div>
          <span>   
              <DateInput
                  labelDescription='Selecione o dia:' 
                  inputValue={dayWork} 
                  onInputChange={handleDayWork}
              />
          </span>
          <span>
             <SelectFaina
              labelDescription='Selecione o tipo de faina:' 
              selectValue={typeFaina} 
              onSelectChange={handleTypeFaina}
             />  
          </span>
        </div>
      </div>

        <div>
          <FainaA1t />
              { typeFaina === "a1t" 
              ? console.log("teste1")
              : console.log("teste2")
              }
        </div>

          <div>
            <PorCaminhao />
          </div>
    
          <div className="flex flex-row align-middle justify-items-center p-2">
              <span>
                <TextInput
                  labelDescription='Digite o peso movimentado no período:' 
                  inputValue={weightTotal} 
                  onInputChange={handleWeightTotal}
                  placeHolder='Peso total'
                />
              </span>  
          </div> 
          <div className="border border-gray-600 item-center">
                <IconPlus className="hover:bg-blue-200 rounded-full" size={30}/>
            </div>
          </div>  
          <div className="bg-pink-300 flex items-center justify-between">
            {error.trim() !== '' ? <Error>{error}</Error> : <span>&nbsp;</span>}
                <div className="flex flex-row items-center space-x-2">
             {/* <Button colorClass="rounded-lg font-bold p-2 bg-yellow-400" >+</Button> */}
  
            <span>
              <Button colorClass="bg-red-200 hover:bg-red-300" type="reset">
                Limpar
              </Button>
              <Button colorClass="bg-green-300 hover:bg-green-400" type="submit">
                Incluir
              </Button>
            </span>
     
        </div>
      
      </div>
     </div>
  </form>
  );
}
