import TextInput from '../TextInput';
//import TextArea from '../TextArea';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Error from '../Error';

import { BsPlusCircle as IconPlus } from 'react-icons/bs';

import DateInput from "../DateInput";
import RadioButton from '../RadioButton';


export default function FlashCardForm({
  createMode = true,
  onPersist = null,
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


  const backgroundClassName = createMode ? 'bg-gray-200' : 'bg-blue-200';

  return (
    <form
      className={`${backgroundClassName} p-2`}
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
    >
 

<div className="">

<h2 className="text-center font-semibold">Calculadora de Remuneração</h2>

<TextInput
  labelDescription="Navio:"
  inputValue={title}
  onInputChange={handleTitleChange}
/>


    <div className="border-2 border-red-300 flex flex-row justify-evenly items-center align-middle my-2">
          <span>
            <div className="flex flex-col items-center align-middle"> 
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
              <TextInput
                labelDescription='Digite o tipo de faina:' 
                inputValue={typeFaina} 
                onInputChange={handleTypeFaina}
                placeHolder='C6 para adubo'
              />  
            </span>
          </div>
          {/* <span>
          <SelectFaina
              labelDescription='Digite o tipo de faina:' 
              selectValue={faina} 
              onSelectChange={handleSelectChange}
            />  
          </span> */}


        </div>
<TextInput
  labelDescription="Observações:"
  inputValue={description}
  onTextAreaChange={handleDescriptionChange}
/>

        <div className="border border-green-400 flex flex-row align-middle justify-items-center my-2">
        <span>
                <TextInput
                  labelDescription='Digite o peso movimentado:' 
                  inputValue={weightTotal} 
                  onInputChange={handleWeightTotal}
                  placeHolder='Somente números'
                />
              </span>  

        </div> 

     
        <div className="border border-pink-400 flex items-center justify-between">
        {error.trim() !== '' ? <Error>{error}</Error> : <span>&nbsp;</span>}
            <div className="flex flex-row items-center space-x-2">
             {/* <Button colorClass="rounded-lg font-bold p-2 bg-yellow-400" >+</Button> */}
<span>
            <IconPlus className="hover:bg-blue-200 rounded-full" size={30}/>
</span>
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
