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
import PesoMovimentado from '../PesoMovimentado';
import FainaCalculo from '../FainaCalculo';
import FainaValor from '../FainaValor';
import FainaCotas from '../FainaCotas';

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



  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }


  const backgroundClassName = createMode ? 'bg-gray-100' : 'bg-yellow-50';




  return (
    <form
      className={`${backgroundClassName} p-2`}
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      // onButtonClick={handleButtonClick}
    >
      <div className="bg-blue-50 border-2">
        <div className="bg-gray-200 flex flex-row place-items-center justify-evenly text-base p-2">
          <p className="text-center font-semibold mb-2">Calculadora de Remuneração</p>
          <div>
             <Button onButtonClick={handleButtonClick}>Novo Trabalho</Button>
          </div>
        </div>
      
      <div className="bg-blue-50">
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
      <div className="bg-purple-200 flex flex-row align-middle justify-items-center p-2">
              <PesoMovimentado />
          </div> 
          <div className="bg-yellow-100">
            <PorCaminhao />
          </div>
          <div className="bg-red-300">
          <FainaCotas />
        </div> 
          <div className="bg-green-100">
          <FainaA1t />
              { typeFaina === "a1t" 
              ? console.log("teste1")
              : console.log("teste2")
              }
        </div>
        <div className="bg-red-300">
          <FainaCalculo />
        </div> 
        <div className="bg-pink-300">
          <FainaValor />
        </div> 
          <div className="p-4 flex justify-center">
                <IconPlus className="hover:bg-blue-200 rounded-full" size={30}/>
            </div>
          </div>  
          <div className="bg-pink-50 flex items-center justify-around">
              {error.trim() !== '' ? <Error>{error}</Error> : <span>&nbsp;</span>}
                  <div className="flex flex-row items-center p-2 space-x-2">
                      <Button colorClass="bg-red-500 hover:bg-red-300" type="reset">
                        Limpar
                      </Button>
                      <Button colorClass="bg-terciary hover:bg-green-400" type="submit">
                        Incluir
                      </Button>
           </div>
      
      </div>
     </div>
  </form>
  );
}
